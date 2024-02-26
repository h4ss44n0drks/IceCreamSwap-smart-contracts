import { ethers, network } from "hardhat";
import { chainConfigs, dexConfig } from "common";
import { writeFileSync } from "fs";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const Factory = await ethers.getContractFactory("IceCreamSwapV2Factory");
  const factory = await Factory.deploy(dexConfig.dexAdmin);
  console.log(`Factory deployed to ${factory.target}`);
  console.log(await factory.INIT_CODE_HASH());

  const Router = await ethers.getContractFactory("IceCreamSwapV2Router");
  const router = await Router.deploy(factory.target, config.weth);
  console.log(`Router deployed to ${router.target}`);

  const contracts = {
    factory: factory.target,
    router: router.target,
  };
  writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
