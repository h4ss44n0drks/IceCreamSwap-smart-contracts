import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "hardhat-abi-exporter";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 30000,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  abiExporter: {
    runOnCompile: true,
    clear: true,
  },
};

export default config;
