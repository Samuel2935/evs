"use client"; // if this is a Next.js 13+ app with app router

import { useState } from "react";

import Login from "./components/login";
export default function Home() {
  const [ninHash, setNinHash] = useState<string | null>(null);

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome to the Voting System</h1>
      <p className="mb-6">Please log in with your NIN to vote.</p>

      <Login setNinHash={setNinHash} />

      {ninHash && (
        <p className="mt-4 text-green-600">
          NIN Hash: <span className="font-mono">{ninHash}</span>
        </p>
      )}
    </div>
  );
}
