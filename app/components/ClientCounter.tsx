"use client";

import { useEffect, useState } from "react";

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  const [clientTime, setClientTime] = useState("");

  console.log("This console apears in browser and not terminal");

  useEffect(() => {
    setClientTime(new Date().toISOString());
  }, []);

  return (
    <div>
      <p className="text-xs text-blue-600 b-2">client time: {clientTime}</p>
      <button
        className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        count :{count}
      </button>
    </div>
  );
}
