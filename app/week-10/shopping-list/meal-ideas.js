"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div className="text-white">
        <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
        <p>Select an item to view meal ideas.</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas for "{ingredient}"
      </h2>
      <ul className="space-y-3">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-700 rounded-lg p-3 flex items-center gap-4"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-md"
              />
              <p className="font-semibold">{meal.strMeal}</p>
            </li>
          ))
        ) : (
          <p>No meal ideas found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
}
