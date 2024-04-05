import Dice from "./Dice";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0)
  const [gameHistory, setGameHistory] = useState([])

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum)
    // 위 두 줄을 주석처리하면 gameHistory도 안 나옴
    // 왜? 배열은 기본형이 아닌 참조형임
    // 배열 자체를 값으로 갖는게 아닌 배열을 가리키고 있는 주솟값을 가리킴
    // gameHistory.push(nextNum)
    setGameHistory([...gameHistory, nextNum])
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0)
    setGameHistory([])
  };
  return (
    <div>
      <div>
        <Button text="던지기" onClick={handleRollClick} />
        <Button text="처음부터" onClick={handleClearClick} />
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num}/>
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>총점</h2>
        {/* join: 아규먼트로 전달한 값을 배열의 각 요소들 사이에 넣어서 하나의 문자열을 만들어 주는 메소드 */}
        <p>{gameHistory.join(', ')}</p> 
      </div>
    </div>
  );
}

export default App;

