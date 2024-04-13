import './Rating.css';

// 별점이 나타내는 값을 요소로 하는 배열
const RATINGS = [1, 2, 3, 4, 5];

// selected라는 클래스를 추가해서 색을 다르게 보여줌
function Star({ selected = false, rating = 0, onSelect, onHover }) {
  const className = `Rating-star ${selected ? 'selected' : ''}`;

  // 별점 클릭시
  const handleClick = onSelect ? () => onSelect(rating) : undefined;

  // 별점 호버시
  const handleMouesOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouesOver}
    >
      ★
    </span>
  );
}

function Rating({ className, value = 0, onSelect, onHover, onMouseOut }) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;
