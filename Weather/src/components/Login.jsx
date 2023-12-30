import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext); // Use useContext to access context values

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <>
      <div>
        <input
          className="mx-2 border border-black p-3"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter your username"
        />
        <input
          className="mx-2 border border-black p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white p-3 rounded-xl"
        >
          Submit
        </button>
      </div>
    </>
  );
}
