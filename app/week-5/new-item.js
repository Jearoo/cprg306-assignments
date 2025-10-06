"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };

    console.log("New Item:", item);
    alert(
      `Added Item:\n\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-white">


      <form onSubmit={handleSubmit} >
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-1"
          >
            Item Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            className="text-black"
          />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-black">Select Quantity</h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
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
              type="button"
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
          <p className="text-sm text-gray-500">
            Quantity must be between 1 and 20
          </p>
        </div>

        <div>
          <label  
            htmlFor="category"
            className="text-gray-700  "
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500" 
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
