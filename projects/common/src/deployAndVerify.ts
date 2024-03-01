import { ethers } from "hardhat";
import { tryVerify } from "./verify";
import prompt_sync from "prompt-sync";

const prompt = prompt_sync();

export const deployAndVerify = async (contractName: string, constructorArguments: any[] = []) => {
  const ContractFactory = await ethers.getContractFactory(contractName);

  const deploymentTx = await ContractFactory.getDeployTransaction(...constructorArguments)
  const gasEstimate = await ethers.provider.estimateGas(deploymentTx)
  const feeData = await ethers.provider.getFeeData()
  const deploymentCost = gasEstimate * feeData.gasPrice!
  const balance = await ethers.provider.getBalance((await ethers.getSigners())[0].address)
  const minimumBalance = deploymentCost * 120n / 100n
  if (minimumBalance > balance) {
    prompt(`Deployer wallet balance to low for deployment. missing ${minimumBalance-balance} wei of native token. Please refill and hit enter`)
  }

  const deployedContract = await ContractFactory.deploy(...constructorArguments);
  await deployedContract.waitForDeployment()
  console.log(`${contractName} deployed to ${deployedContract.target.toString()}`);
  await tryVerify(deployedContract.target, constructorArguments);
  return deployedContract;
};
