import { useState } from "react";
import { hashNIN } from "../services/blockchain";

type LoginProps = {
  setNinHash: (hash: string) => void;
};

export default function Login({ setNinHash }: LoginProps) {
  const [nin, setNin] = useState<string>("");

  const handleLogin = () => {
    const hash = hashNIN(nin);
    setNinHash(hash);
  };

  return (
    <div>
      <h2>NIN Login</h2>

      <input
        type="text"
        placeholder="Enter NIN"
        value={nin}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNin(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
}