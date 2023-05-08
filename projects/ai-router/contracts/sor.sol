// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "./interfaces/IERC20.sol";
import "./interfaces/IUniswapV2Pair.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract SmartOrderRouter is Ownable {
    modifier ensure(uint256 deadline) {
        require(deadline >= block.timestamp, "IceCreamSwapAiRouter: EXPIRED");
        _;
    }

    function swapExactTokensForTokens(
        address tokenIn,
        address tokenOut,
        uint256[] calldata amountsIn,
        uint256 amountOutMin,
        address[][] calldata paths,
        address to,
        uint256 deadline
    ) external ensure(deadline) returns (uint256 amountOut) {
        require(paths.length == amountsIn.length, "IceCreamSwapAiRouter: length mismatch");

        for (uint256 i; i < paths.length; i++) {
            // send input amounts to first pool of each route
            IERC20(tokenIn).transferFrom(msg.sender, paths[i][0], amountsIn[i]);

            // swap amongst one path
            swapRoute(tokenIn, paths[i]);

            // get output amount factoring in potential token taxes
            amountOut = IERC20(tokenOut).balanceOf(address(this));
            // ensure output amount is above minimum, output amount
            require(amountOut >= amountOutMin, "IceCreamSwapAiRouter: insufficient output amount");

            // transfer output tokens to user
            IERC20(tokenOut).transfer(to, amountOut);
        }
    }

    function swapRoute(address tokenIn, address[] memory swaps) internal {
        // executing all swaps. output token from previous swap always has to be input token from next swap
        for (uint256 i = 0; i < swaps.length; i++) {
            uint256 amountIn = IERC20(tokenIn).balanceOf(swaps[i]);
            require(amountIn != 0, "IceCreamSwapAiRouter: path 0 input tokens");

            IUniswapV2Pair pool = IUniswapV2Pair(swaps[i]);

            address token0 = pool.token0();
            address token1 = pool.token1();
            require(token0 == tokenIn || token1 == tokenIn, "IceCreamSwapAiRouter: path mismatch");
            bool notReversed = tokenIn != token0;

            (uint112 reserve0, uint112 reserve1, ) = pool.getReserves();

            uint256 amountOut = getAmountOut(
                amountIn,
                notReversed ? reserve0 : reserve1,
                notReversed ? reserve1 : reserve0
            );

            pool.swap(
                notReversed ? 0 : amountOut,
                notReversed ? amountOut : 0,
                i < swaps.length - 1 ? swaps[i + 1] : address(this),
                ""
            );

            tokenIn = notReversed ? token1 : token0;
        }
    }

    // given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset
    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) internal pure returns (uint256 amountOut) {
        require(amountIn > 0, "UniswapV2Library: INSUFFICIENT_INPUT_AMOUNT");
        require(reserveIn > 0 && reserveOut > 0, "UniswapV2Library: INSUFFICIENT_LIQUIDITY");
        uint256 amountInWithFee = amountIn * 997;
        uint256 numerator = amountInWithFee * reserveOut;
        uint256 denominator = reserveIn * 1000 + amountInWithFee;
        amountOut = numerator / denominator;
    }

    // given an output amount of an asset and pair reserves, returns a required input amount of the other asset
    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) internal pure returns (uint256 amountIn) {
        require(amountOut > 0, "UniswapV2Library: INSUFFICIENT_OUTPUT_AMOUNT");
        require(reserveIn > 0 && reserveOut > 0, "UniswapV2Library: INSUFFICIENT_LIQUIDITY");
        uint256 numerator = reserveIn * amountOut * 1000;
        uint256 denominator = (reserveOut - amountOut) * 997;
        amountIn = (numerator / denominator) + 1;
    }
}
