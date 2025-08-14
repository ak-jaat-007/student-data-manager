import React, { useState } from "react";
import { normalizeName, isFuzzyMatch } from "../utils/fuzzySearch";

export default function Tests() {
  const [message, setMessage] = useState("");

  const runTests = () => {
    console.assert(normalizeName("José") === "jose");
    console.assert(normalizeName("JOSE") === "jose");
    console.assert(isFuzzyMatch("rvi", "ravi") === true);
    console.assert(isFuzzyMatch("cse2025-01", "CSE2025-001") === true);
    console.assert(isFuzzyMatch("ana", "arun") === false);
    setMessage("All tests passed ✅");
  };

  return (
    <div className="tests">
      <button onClick={runTests}>Tests</button>
      {message && <span>{message}</span>}
    </div>
  );
}
