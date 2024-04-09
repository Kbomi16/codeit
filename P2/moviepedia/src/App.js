import React, { useState } from "react";
import ReviewList from "./components/ReviewList";
import items from "./mock.json";

function App() {
  const [order, setOrder] = useState('createdAt') // 최신순
  const sortedItems = items.sort((a,b) => b[order] - a[order]) // 평점 높은 순(내림차순)

  const handleNewestClick = () => setOrder('createdAt')

  const handBestClick = () => setOrder('rating')

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handBestClick}>베스트순</button>
      </div>
      <ReviewList items={items} />
    </div>
  );
}

export default App;
