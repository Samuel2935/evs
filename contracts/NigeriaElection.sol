// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract NigeriaElection is Ownable {

    bytes32 public voterRoot;

    struct Candidate {
        uint id;
        string name;
        string party;
        string state;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;

    uint public candidateCount;

    mapping(bytes32 => bool) public nullifiers;

    event VoteCast(bytes32 indexed ninHash, uint candidateId);

    constructor(bytes32 _root) Ownable(msg.sender) {
        voterRoot = _root;
    }

    function addCandidate(
        string memory name,
        string memory party,
        string memory state
    ) external onlyOwner {

        candidateCount++;

        candidates[candidateCount] = Candidate(
            candidateCount,
            name,
            party,
            state,
            0
        );
    }

    function vote(
        bytes32 ninHash,
        bytes32[] calldata proof,
        uint candidateId
    ) external {

        require(!nullifiers[ninHash], "Already voted");

        require(
            MerkleProof.verify(proof, voterRoot, ninHash),
            "Invalid voter"
        );

        candidates[candidateId].voteCount++;

        nullifiers[ninHash] = true;

        emit VoteCast(ninHash, candidateId);
    }
}