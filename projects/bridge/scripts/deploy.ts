import { ethers, network } from "hardhat";
import { chainConfigs, bridgeConfig } from "@icecreamswap/common";
import { writeFileSync } from "fs";

async function main() {
  const sender = (await ethers.getSigners())[0].address;
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const Bridge = await ethers.getContractFactory("IceCreamSwapBridge");
  const bridge = await Bridge.deploy(config.bridgeDomainId, bridgeConfig.relayers, 1, 1_000, config.oneDollarInNative);
  console.log(`Bridge deployed to ${bridge.target.toString()}`);

  const ERC20Handler = await ethers.getContractFactory("IceCreamSwapERC20NativeHandler");
  const erc20Handler = await ERC20Handler.deploy(bridge.target, bridgeConfig.tokenFeePercent * 100);
  console.log(`ERC20NativeHandler deployed to ${erc20Handler.target.toString()}`);

  const BridgedToken = await ethers.getContractFactory("IceCreamSwapBridgedToken");
  const tokens: { [symbol: string]: string } = {};
  for (const tokenConfig of bridgeConfig.bridgedTokens) {
    const bridgedToken = await BridgedToken.deploy(tokenConfig.name, tokenConfig.symbol, bridgeConfig.bridgeAdmin);
    await bridgedToken.grantRole(bridgedToken.MINTER_ROLE(), erc20Handler.target);
    await bridgedToken.revokeRole(bridgedToken.DEFAULT_ADMIN_ROLE(), sender);
    await bridge.adminSetResource(erc20Handler.target, tokenConfig.resourceId, bridgedToken.target);
    await erc20Handler.setBurnable(bridgedToken.target, true);
    console.log(`deployed and configured ${tokenConfig.symbol} token at ${bridgedToken.target.toString()}`);
    tokens[tokenConfig.symbol] = bridgedToken.target.toString();
  }

  await bridge.transferAdmin(bridgeConfig.bridgeAdmin);
  console.log(`transferred Bridge admin to ${bridgeConfig.bridgeAdmin}`);

  const contracts = {
    bridge: bridge.target.toString(),
    erc20Handler: erc20Handler.target.toString(),
    tokens: tokens,
  };
  writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
