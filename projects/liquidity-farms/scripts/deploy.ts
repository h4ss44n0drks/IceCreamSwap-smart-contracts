import { ethers, network } from "hardhat";
import { chainConfigs, farmConfig } from "common";
import { writeFileSync } from "fs";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const Farm = await ethers.getContractFactory("IceCreamFarm");
  const farm = await Farm.deploy(config.ice, 0, farmConfig.iceTreasury);
  console.log(`Farm deployed to ${farm.target}`);

  await farm.transferOwnership(farmConfig.farmAdmin);

  const contracts = {
    farm: farm.target,
  };
  writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
