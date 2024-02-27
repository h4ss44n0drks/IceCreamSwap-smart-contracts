import { network } from "hardhat";
import { chainConfigs, deployAndVerify, dexConfig } from "@icecreamswap/common";
import { writeFileSync } from "fs";

async function main() {
  const networkName = network.name;
  const config = chainConfigs[networkName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }

  const factory = await deployAndVerify("IceCreamSwapV2Factory", [dexConfig.dexAdmin]);

  const router = await deployAndVerify("IceCreamSwapV2Router", [factory.target, config.weth]);

  const contracts = {
    factory: factory.target.toString(),
    router: router.target.toString(),
  };
  writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
