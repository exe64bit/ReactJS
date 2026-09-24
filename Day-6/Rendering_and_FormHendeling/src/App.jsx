import React from "react";
import { useState } from "react";

function App() {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Raman",
  });

  return (
    <div>
      <h1 className="m-4 p-4">{count}</h1>
      <h1 className="m-4 p-4">Name is - {user.name}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-emerald-500 cursor-pointer p-4 rounded-xl m-4"
      >
        Count Inc
      </button>

      <button
        onClick={() => {
          user.name = "batman";
        }}
        className="bg-emerald-500 cursor-pointer p-4 rounded-xl m-4"
      >
        Change Name
      </button>
    </div>
  );
}

export default App;
