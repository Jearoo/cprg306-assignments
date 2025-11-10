"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      )
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black min-h-screen py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-6">
            Shopping List
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-10">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
