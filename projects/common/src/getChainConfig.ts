import { ethers, network } from "hardhat";
import hre from "hardhat";
import { chainConfigs } from "./index";
import prompt_sync from "prompt-sync";

const prompt = prompt_sync();

export const getChainConfig = async () => {
  const defaultWallet = (await ethers.getSigners())[0];

  const chainName = network.name;
  const config = chainConfigs[chainName as keyof typeof chainConfigs];
  if (!config) {
    throw new Error(`No config found for network ${chainName}: `);
  }

  if (chainName !== "hardhat") {
    if (prompt(`Network is ${chainName} are you sure you want to continue? [y,n]: `).toLowerCase() !== "y") {
      throw new Error(`Aborted`);
    }
  }

  const explorerApiUri = hre.config.etherscan.customChains.find((chain) => chain.network === chainName)?.urls.apiURL;
  let explorerApiWorking = false;
  if (explorerApiUri) {
    // @ts-ignore
    const response = await fetch(explorerApiUri + "?module=block&action=eth_block_number");
    if (response.ok) {
      const responseJson = await response.json();
      if (responseJson.result) {
        explorerApiWorking = true;
      }
    }
  }

  if (!explorerApiWorking && chainName !== "hardhat") {
    if (prompt(`Block explorer API seems to not be configured or working. Continue? [y,n]: `).toLowerCase() !== "y") {
      throw new Error(`Aborted`);
    }
  }

  return {
    chainConfig: config,
    prompt,
    chainName,
    defaultWallet,
  };
};
