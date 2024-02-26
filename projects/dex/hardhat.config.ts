import type { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-ethers";
import { networks } from "networks";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks,
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
};

export default config;
