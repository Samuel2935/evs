import React, { useState } from "react";
import { hashNIN } from "../services/blockchain";

interface LoginProps {
  setNinHash: (hash: string) => void;
}

export default function Login({ setNinHash }: LoginProps) {
  const [nin, setNin] = useState<string>("");

  const handleLogin = () => {
    if (!nin) return;
    const hash = hashNIN(nin);
    setNinHash(hash);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter NIN"
        value={nin}
        onChange={(e) => setNin(e.target.value)}
        className="p-2 rounded "
      />
      <button onClick={handleLogin} className="bg-green-700 text-white p-2 rounded">
        Sign In
      </button>
    </div>
  );
}