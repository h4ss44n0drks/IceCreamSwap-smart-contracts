import { ethers, network } from "hardhat";
import { chainConfigs, bridgeConfig } from "common";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const bridge = await ethers.deployContract("Bridge", [
    config.bridgeDomainId,
    bridgeConfig.relayers,
    1,
    1_000,
    config.oneDollarInNative,
  ]);

  await bridge.waitForDeployment();

  console.log(`Bridge deployed to ${bridge.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
