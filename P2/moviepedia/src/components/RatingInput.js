import { useState } from 'react';
import Rating from './Rating';
import './RatingInput.css';

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  // nextValue를 name프롭과 함께 넘겨줌
  // ReviewForm에서 선택한 값이 반영됨
  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating} // 별 모양에 호버시 별점이 선택된 것처럼 미리보여주기
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
