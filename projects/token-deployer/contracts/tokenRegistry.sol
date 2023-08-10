// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IIceCreamSwapRouter.sol";
import "./interfaces/ITokenRegistry.sol";

contract TokenRegistry is Ownable, ITokenRegistry {
    IERC20 public ice;
    address public feeReceiver;
    IIceCreamSwapRouter public dexRouter;
    mapping(address => uint256) public getDeployerTokenType;
    mapping(address => uint256) public getTokenType;
    mapping(address => address) public getTokenCreator;

    event TokenRegistered(address indexed token, address indexed creator, uint256 tokenType);
    event DeployerRegistered(uint256 indexed tokenType, address indexed deployer);

    constructor(
        IERC20 _ice, // ICE token to pair auto liquidity with
        IIceCreamSwapRouter _dexRouter, // dex router address to list liquidity at
        address _feeReceiver // address to receive the ICE fee
    ) {
        ice = _ice;
        dexRouter = _dexRouter;
        feeReceiver = _feeReceiver;
    }

    function registerToken(address token, address creator) external {
        uint256 tokenType = getDeployerTokenType[msg.sender];
        require(tokenType != 0, "Deployer not registered");

        getTokenType[token] = tokenType;
        getTokenCreator[token] = creator;

        emit TokenRegistered(token, creator, tokenType);
    }

    function isTokenRegistered(address token) external view returns (bool isRegistered) {
        isRegistered = getTokenType[token] != 0;
    }

    function isDeployerRegistered(address deployer) external view returns (bool isRegistered) {
        isRegistered = getDeployerTokenType[deployer] != 0;
    }

    function setTokenDeployer(address deployer, uint256 tokenType) external onlyOwner {
        require(tokenType != 0, "tokenType == 0");
        getDeployerTokenType[deployer] = tokenType;
        emit DeployerRegistered(tokenType, deployer);
    }

    function changeFeeReceiver(address _feeReceiver) external onlyOwner {
        feeReceiver = _feeReceiver;
    }

    function changeDexRouter(IIceCreamSwapRouter _dexRouter) external onlyOwner {
        dexRouter = _dexRouter;
    }

    function changeIceToken(IERC20 _ice) external onlyOwner {
        ice = _ice;
    }
}
