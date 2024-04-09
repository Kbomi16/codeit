import React, { useState } from "react";
import ReviewList from "./components/ReviewList";
import mockItems from "./mock.json";

function App() {
  const [items, setItems] = useState(mockItems)
  const [order, setOrder] = useState("createdAt"); // 최신순
  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 평점 높은 순(내림차순)

  const handleNewestClick = () => setOrder("createdAt");
  const handBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    // 현재 순회 중인 요소의 id가 주어진 id와 같지 않은 경우를 체크
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems)
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
