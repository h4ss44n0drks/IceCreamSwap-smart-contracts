import { ethers } from "hardhat";
import prompt_sync from "prompt-sync";
import { ContractMethod, TransactionResponse } from "ethers";

const prompt = prompt_sync();

export const transactSafe = async (contractMethod: ContractMethod, contractParameters: any[] = []) => {
  const gasEstimate = await contractMethod.estimateGas(...contractParameters)
  const feeData = await ethers.provider.getFeeData()
  const deploymentCost = gasEstimate * (feeData.maxFeePerGas? feeData.maxFeePerGas + feeData.maxPriorityFeePerGas!: feeData.gasPrice!)
  const balance = await ethers.provider.getBalance((await ethers.getSigners())[0].address)
  const minimumBalance = deploymentCost * 120n / 100n
  if (minimumBalance > balance) {
    prompt(`Deployer wallet balance to low for contract interaction. missing ${minimumBalance-balance} wei of native token. Please refill and hit enter`)
  }

  const tx: TransactionResponse = await contractMethod(...contractParameters)
  await tx.wait()
};
