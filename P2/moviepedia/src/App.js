import React, { useCallback, useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { createReview, deleteReview, getReviews, updateReview } from "./api";
import ReviewForm from "./components/ReviewForm";
import useAsync from "./hooks/useAsync";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt"); // 최신순
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, loadingError, getReviewsAsync] = useAsync(getReviews);

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 평점 높은 순(내림차순)

  const handleNewestClick = () => setOrder("createdAt");
  const handBestClick = () => setOrder("rating");
  const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if (!result) return;
    // 현재 순회 중인 요소의 id가 주어진 id와 같지 않은 경우를 체크
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = useCallback(async (options) => {
    let result = await getReviewsAsync(options);
    // 에러나면 뒷부분 코드 실행 안 되도록
    if (!result) return;

    const { paging, reviews } = result;

    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  }, [getReviewsAsync]);

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleCreateSuccess = (review) => {
    // 새로 추가된 리뷰를 배열의 맨 앞에 추가
    setItems((prevItems) => [review, ...prevItems]);
  };

  // 리뷰 수정 후 리스폰스 값 반영
  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      // prevItems배열에서 같은 아이디에 해당하는 리뷰를 찾아서 갈아 끼우기
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  // 함수를 디펜던시 리스트에 추가하면 무한루프에 빠질 수 있음
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order, handleLoad]); // 콜백함수를 맨 처음 렌더링할 때만 실행해서 무한루프를 방지함

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handBestClick}>베스트순</button>
      </div>
      {/* 수정 후 완료 누르면 내용 반영하기 */}
      <ReviewForm
        onSubmit={createReview}
        onSubmitSuccess={handleCreateSuccess}
      />
      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={updateReview}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && (
        // 리퀘스트가 진행 중을 때 버튼 비활성화
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {/* 로딩에러가 있을 때만 message 프로퍼티 참조 */}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
