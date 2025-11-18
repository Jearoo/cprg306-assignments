"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === undefined) return;

    if (user === null) {
      router.push("/week-10");
    }
  }, [user, router]);

  useEffect(() => {
    if (!user) return;

    async function loadItems() {
      const data = await getItems(user.uid);
      setItems(data);
    }

    loadItems();
  }, [user]);

  if (user === undefined) {
    return (
      <main className="text-white flex justify-center items-center min-h-screen">
        <p>Checking authentication...</p>
      </main>
    );
  }

  if (user === null) {
    return null;
  }

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    newItem.id = id;
    setItems((prev) => [...prev, newItem]);
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
          <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
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
