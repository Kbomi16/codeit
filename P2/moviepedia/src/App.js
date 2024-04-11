import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { getReviews } from "./api";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt"); // 최신순
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 평점 높은 순(내림차순)

  const handleNewestClick = () => setOrder("createdAt");
  const handBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    // 현재 순회 중인 요소의 id가 주어진 id와 같지 않은 경우를 체크
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true)
      result = await getReviews(options)
    } catch (error) {
      console.error(error);
      return;
    } finally {
      setIsLoading(false)
    }
    const {paging, reviews} = result


    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]); // 콜백함수를 맨 처음 렌더링할 때만 실행해서 무한루프를 방지함

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && (
        // 리퀘스트가 진행 중을 때 버튼 비활성화
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
    </div>
  );
}

export default App;
