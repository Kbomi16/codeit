import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { getReviews } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt"); // 최신순
  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 평점 높은 순(내림차순)

  const handleNewestClick = () => setOrder("createdAt");
  const handBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    // 현재 순회 중인 요소의 id가 주어진 id와 같지 않은 경우를 체크
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async () => {
    // 비동기로 리퀘스를 보냈다가 리스폰스가 도착하면 reviews 변수를 지정하고
    const { reviews } = await getReviews();
    // setItems를 통해 state 변경 -> App 컴포넌트를 다시 렌더링함
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []); // 콜백함수를 맨 처음 렌더링할 때만 실행해서 무한루프를 방지함

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button>불러오기</button>
    </div>
  );
}

export default App;
