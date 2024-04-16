import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  const plusNum = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count * 100);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={plusNum}>+</button>1. + 버튼 클릭시 count의 값을 맞춰주세요!
    </div>                               
  );
}

export default Counter