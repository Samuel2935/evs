import hre from "hardhat";

async function main() {
  // Access ethers via the plugin
  const ethers = (hre as any).ethers;
  const Election = await ethers.getContractFactory("NigeriaElection");

  const election = await Election.deploy();
  await election.waitForDeployment();

  console.log("Contract deployed to:", await election.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});