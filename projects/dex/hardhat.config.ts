import { HardhatUserConfig } from "hardhat/config";
import { default as hardhatConfigTemplate } from "@icecreamswap/common/src/hardhat.config";

const config: HardhatUserConfig = {
  ...hardhatConfigTemplate,
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
