import { expect } from "chai";
import hre from "hardhat";
const ethers = (hre as any).ethers;

describe("NigeriaElection", function () {
  let election: any;

  beforeEach(async () => {
    const Election = await ethers.getContractFactory("NigeriaElection");
    election = await Election.deploy();
    await election.waitForDeployment();
  });

  it("should add a candidate", async () => {
    await election.addCandidate("Peter Obi", "Labour Party", "Anambra");
    const candidate = await election.candidates(0);
    expect(candidate.name).to.equal("Peter Obi");
  });
});