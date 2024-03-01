import { ethers, network } from "hardhat";
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
      return;
    }
  }
  return {
    chainConfig: config,
    prompt,
    chainName,
    defaultWallet,
  }
}