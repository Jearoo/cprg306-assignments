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
      <div>
        <h2>Meal Ideas</h2>
        <p>Select an item to view meal ideas.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Meal Ideas for "{ingredient}"</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)
        ) : (
          <p>No meal ideas found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
}
