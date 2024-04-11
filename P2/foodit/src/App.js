import React, { useState, useEffect } from "react";
import FoodList from "./components/FoodList";
import { getFoods } from "./api";

const LIMIT = 10;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [cursor, setCursor] = useState(null)
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const { foods, paging: {nextCursor} } = await getFoods(options);
    if (options.cursor) {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(nextCursor)
  };

  const handleLoadMore = () => {
    handleLoad({ order, cursor });
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  return (
    <>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
        <FoodList items={sortedItems} onDelete={handleDelete} />
      </div>
      {cursor && (
        <button onClick={handleLoadMore}>
          더 보기
        </button>
      )}
    </>
  );
}

export default App;

