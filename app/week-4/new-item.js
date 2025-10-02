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
    <div>
      <h2>Select Quantity</h2>
      <div>
        <button
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
      <p>Quantity must be between 1 and 20</p>
    </div>
  );
}
