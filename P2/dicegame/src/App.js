import Board from "./Board";
import { useState } from "react";
import Button from "./Button";


function random(n) {
  return Math.ceil(Math.random() * n);
}

function App(props) {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6)
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum])
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <>
      <div>
        <Button text="던지기" onClick={handleRollClick} />
        <Button text="처음부터" onClick={handleClearClick} />
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory}/>
        <Board name="상대" color="red" gameHistory={otherHistory}/>
      </div>
    </>
  );
}

export default App;

