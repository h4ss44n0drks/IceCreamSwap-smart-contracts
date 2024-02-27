import { ethers, network } from "hardhat";
import { chainConfigs } from "@icecreamswap/common";
import { writeFileSync } from "fs";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const Multicall = await ethers.getContractFactory("Multicall3");
  const multicall = await Multicall.deploy();
  console.log(`Multicall deployed to ${multicall.target}`);

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
