"use client";

import {useState} from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md w-64">
      <h2 className="text-lg font-semibold text-black">Select Quantity</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg text-white font-bold ${
            quantity === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>

        <span className="text-xl font-bold text-black">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg text-white font-bold ${
            quantity === 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500">Quantity must be between 1 and 20</p>
    </div>
  );
}
