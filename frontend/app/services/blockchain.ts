import { ethers, Contract } from "ethers";
import VotingABI from "./VotingABI.json";

const CONTRACT_ADDRESS = "DEPLOYED_ADDRESS";

export const getContract = async (): Promise<Contract> => {

  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  const signer = await provider.getSigner();

  return new ethers.Contract(
    CONTRACT_ADDRESS,
    VotingABI,
    signer
  );
};

export const hashNIN = (nin: string): string => {
  return ethers.keccak256(
    ethers.toUtf8Bytes(nin)
  );
};