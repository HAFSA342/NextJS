import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">{count}</h1>
      <div className="flex gap-10">
        <button
          onClick={addCount}
          className="p-3 bg-green-700 text-white font-bold rounded hover:shadow-lg"
        >
          Add
        </button>
        <button
          onClick={removeCount}
          className="p-3 bg-red-700 text-white font-bold rounded hover:shadow-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Index;
