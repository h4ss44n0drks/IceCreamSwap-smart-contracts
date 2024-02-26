import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import { networks } from "networks";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks,
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
};

export default config;
