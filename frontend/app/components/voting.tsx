import { getContract } from "../services/blockchain";

type VotingProps = {
  ninHash: string;
};

export default function Voting({ ninHash }: VotingProps) {

  const vote = async (candidateId: number) => {

    const contract = await getContract();

    await contract.vote(ninHash, candidateId);

  };

  return (
    <div>
      <button onClick={() => vote(1)}>
        Vote Candidate 1
      </button>
    </div>
  );
}