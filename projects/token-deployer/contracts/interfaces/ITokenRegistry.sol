// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IIceCreamSwapRouter.sol";

interface ITokenRegistry {
    function ice() external returns (IERC20 ice);

    function feeReceiver() external returns (address feeReceiver);

    function dexRouter() external returns (IIceCreamSwapRouter dexRouter);

    function getTokenType(address) external returns (uint256 tokenType);

    function getDeployerTokenType(address) external returns (uint256 tokenType);

    function getTokenCreator(address) external returns (address creator);

    function registerToken(address token, address creator) external;

    function isTokenRegistered(address token) external view returns (bool isRegistered);

    function isDeployerRegistered(address deployer) external view returns (bool isRegistered);
}
