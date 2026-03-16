import { useEffect } from "react";
import { Contract } from "ethers";

type VoteListenerProps = {
  contract: Contract;
};

export default function VoteListener({ contract }: VoteListenerProps) {

  useEffect(() => {

    const handler = (candidateId: bigint, state: string) => {
      console.log(candidateId.toString(), state);
    };

    contract.on("VoteCast", handler);

    return () => {
      contract.off("VoteCast", handler);
    };

  }, [contract]);

  return null;
}