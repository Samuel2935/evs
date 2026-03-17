import React from "react";
import { getContract } from "../services/blockchain";

interface VotingProps {
  ninHash: string;
}

export default function Voting({ ninHash }: VotingProps) {
  const vote = async (candidateId: number) => {
    try {
      const contract = await getContract();
      const tx = await contract.vote(ninHash, candidateId);
      await tx.wait();
      alert(`Voted for candidate ${candidateId}`);
    } catch (err) {
      console.error("Voting error:", err);
      alert("Failed to vote. See console for details.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => vote(1)} className="bg-green-500 text-white p-2 rounded">
        Vote Candidate 1
      </button>
      <button onClick={() => vote(2)} className="bg-green-500 text-white p-2 rounded">
        Vote Candidate 2
      </button>
    </div>
  );
}