import React, { useState } from "react";
import FoodList from './components/FoodList';
import items from './mock.json'

function App() {
  const [order, setOrder] = useState('createdAt')
  const sortedItems = items.sort((a,b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt')
  const handleCalorieClick = () => setOrder('calorie')

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} />
    </div>
  );
}

export default App;
