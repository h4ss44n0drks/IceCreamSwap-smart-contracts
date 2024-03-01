import { ethers } from "hardhat";
import { tryVerify } from "./verify";

export const deployAndVerify = async (contractName: string, constructorArguments: any[] = []) => {
  const ContractFactory = await ethers.getContractFactory(contractName);
  const deployedContract = await ContractFactory.deploy(...constructorArguments);
  await deployedContract.waitForDeployment()
  console.log(`${contractName} deployed to ${deployedContract.target.toString()}`);
  await tryVerify(deployedContract.target, constructorArguments);
  return deployedContract;
};
