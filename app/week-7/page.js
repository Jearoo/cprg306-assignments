"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem  = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-black min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">
          Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />

        <div className="mt-10">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}
