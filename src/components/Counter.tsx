"use client";

import { useState } from "react";

interface CounterProps {
  initialValue?: number;
  label?: string;
}

export default function Counter({
  initialValue = 0,
  label = "Counter",
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">{label}</h2>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          data-testid="decrement-button"
        >
          -
        </button>
        <span
          className="text-2xl font-bold text-gray-900"
          data-testid="count-display"
        >
          {count}
        </span>
        <button
          onClick={increment}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          data-testid="increment-button"
        >
          +
        </button>
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        data-testid="reset-button"
      >
        Reset
      </button>
    </div>
  );
}
