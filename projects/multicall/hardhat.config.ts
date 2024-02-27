import { HardhatUserConfig } from "hardhat/config";
import { default as hardhatConfigTemplate } from "@icecreamswap/common/src/hardhat.config";

const config: HardhatUserConfig = {
  ...hardhatConfigTemplate,
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
};

export default config;
