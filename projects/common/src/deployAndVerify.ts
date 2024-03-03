import { ethers } from "hardhat";
import { tryVerify } from "./verify";
import prompt_sync from "prompt-sync";

const prompt = prompt_sync();

export const deployAndVerify = async (contractName: string, constructorArguments: any[] = []) => {
  const ContractFactory = await ethers.getContractFactory(contractName);

  const deploymentTx = await ContractFactory.getDeployTransaction(...constructorArguments)
  const gasEstimate = await ethers.provider.estimateGas({
    from: "0x0000000000000000000000000000000000000000",
    data: deploymentTx.data
  })
  const feeData = await ethers.provider.getFeeData()
  const deploymentCost = gasEstimate * feeData.gasPrice!
  const balance = await ethers.provider.getBalance((await ethers.getSigners())[0].address)
  const minimumBalance = deploymentCost * 200n / 100n
  if (minimumBalance > balance) {
    prompt(`Deployer wallet balance to low for deployment. missing ${minimumBalance-balance} wei of native token. Please refill and hit enter`)
  }

  const deployedContract = await ContractFactory.deploy(...constructorArguments);
  await deployedContract.waitForDeployment()
  console.log(`${contractName} deployed to ${deployedContract.target.toString()}`);
  await new Promise(r => setTimeout(r, 10000));  // sleep 10 seconds so explorer has time to index
  await tryVerify(deployedContract.target, constructorArguments);
  return deployedContract;
};
