import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";
import './App.css'

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };
  // 원하는 숫자로 배점을 정하면, 게임이 진행될 때마다 이긴 쪽이 해당하는 점수를 얻는 기능
  const handleBetChange = (e) => {
    // input의 value 속성을 참조(문자열이기 때문에, 숫자형으로 바꿈) 
    let num = Number(e.target.value);
    // if (num > 9) num %= 10;
    // if (num > 1) num = 1;
    // num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div className="App-scores">
        {score} : {otherScore}
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
        <div class="App-hands">
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
        </div>
        </div>
      </div>
      <div className="App-bet">
        <input
          type="number"
          value={bet}
          min={1}
          max={9}
          onChange={handleBetChange}
        ></input>
      </div>
      <p>승부 기록: {gameHistory.join(", ")}</p>
      <div>
        <HandButton className="HandButton" value="rock" onClick={handleButtonClick} />
        <HandButton className="HandButton" value="scissor" onClick={handleButtonClick} />
        <HandButton className="HandButton" value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;

