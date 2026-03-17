"use client";

import React, { useState } from "react";
import Login from "./components/login";
import Voting from "./components/voting";

export default function Home() {
  const [ninHash, setNinHash] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!ninHash) return;

    navigator.clipboard.writeText(ninHash);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const truncateHash = (hash: string) =>
    `${hash.slice(0, 6)}...${hash.slice(-4)}`;

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-green-700 text-2xl font-bold mb-2 text-center">
        Welcome to the <span className="naijacolor">Nigerian</span> Election Voting System
      </h1>

      <p className="mb-6 text-center">
        Please log in with your NIN to vote.
      </p>

      {/* Auth / Voting Switch */}
      {!ninHash ? (
        <Login setNinHash={setNinHash} />
      ) : (
        <Voting ninHash={ninHash} />
      )}

      {/* Hash Display */}
      {ninHash && (
        <div className="mt-6 w-full max-w-md">
          <p className="text-green-600 mb-1 text-sm">NIN Hash</p>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between gap-2 p-3 border rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-green-500"
            title="Click to copy"
          >
            <span className="font-mono text-sm truncate">
              {truncateHash(ninHash)}
            </span>

            <span className="text-sm text-blue-500 whitespace-nowrap">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}