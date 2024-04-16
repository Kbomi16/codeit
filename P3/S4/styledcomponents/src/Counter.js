// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(10);

//   const plusNum = () => {
//     setCount(count - 1);
//     setCount(count - 1);
//     setCount(count - 1);
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count * 100);
//   };

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={plusNum}>+</button>1. + 버튼 클릭시 count의 값을 맞춰주세요!
//     </div>                               
//   );
// }

// export default Counter

import React, { useState } from 'react';

function Counter() {
  // count가 바뀌는 걸 보기위해 임시방편으로 let쓴 것. 원래는 const 써야함!!
  const [count, setCount] = useState(0);

  function handleIncrement() {
    count += 1
    console.log(count)
    // setCount((count) => count += 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

