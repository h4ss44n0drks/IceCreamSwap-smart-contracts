// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
require("dotenv").config({ path: require("find-config")(".env") });

import chainConfigs from "./chainConfigs";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import { ChainConfig } from "@nomicfoundation/hardhat-verify/src/types";

const hardhatConfigTemplate: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: Object.entries(chainConfigs).reduce((acc: { [index: string]: {} }, chainObj) => {
    const [chainName, chain] = chainObj;
    if (chainName === "hardhat") return acc;
    acc[chainName] = {
      url: chain.url,
      chainId: chain.chainId,
      accounts: [process.env.PRIVATE_KEY!],
    };
    return acc;
  }, {}),
  etherscan: {
    apiKey: Object.entries(chainConfigs).reduce((acc: { [index: string]: string }, chainObj) => {
      const [chainName, chain] = chainObj;
      acc[chainName] = chain.explorerApiKey || "";
      return acc;
    }, {}),
    customChains: Object.entries(chainConfigs).reduce((acc, chainObj) => {
      const [chainName, chain] = chainObj;
      if (chain.explorerApi) {
        acc.push({
          network: chainName,
          chainId: chain.chainId,
          urls: {
            apiURL: chain.explorerApi,
            browserURL: chain.explorer,
          },
        });
      }
      return acc;
    }, [] as ChainConfig[]),
  },
};

export default hardhatConfigTemplate;
