import Board from "./Board";
import { useState } from "react";
import Button from "./Button";


function random(n) {
  return Math.ceil(Math.random() * n);
}

function App(props) {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6)
    setNum(nextNum);
    setSum(sum + nextNum);
    // 위 두 줄을 주석처리하면 gameHistory도 안 나옴
    // 왜? 배열은 기본형이 아닌 참조형임
    // 배열 자체를 값으로 갖는게 아닌 배열을 가리키고 있는 주솟값을 가리킴
    // gameHistory.push(nextNum)
    setGameHistory([...gameHistory, nextNum]);
    setOtherNum(nextOtherNum)
    setOtherSum(otherSum + nextOtherNum)
    setOtherGameHistory([...otherGameHistory, nextOtherNum])
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <>
      <div>
        <Button text="던지기" onClick={handleRollClick} />
        <Button text="처음부터" onClick={handleClearClick} />
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
      </div>
    </>
  );
}

export default App;

