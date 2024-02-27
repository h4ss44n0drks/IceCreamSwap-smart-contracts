import { network } from "hardhat";
import { chainConfigs, deployAndVerify } from "@icecreamswap/common";
import { writeFileSync } from "fs";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const multicall = await deployAndVerify("Multicall3", []);

  const contracts = {
    multicall: multicall.target,
  };
  writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
