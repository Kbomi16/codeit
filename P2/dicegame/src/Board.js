import Dice from "./Dice";

function Board({ name, color, num, sum, gameHistory }) {
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>총점</h2>
      {/* join: 아규먼트로 전달한 값을 배열의 각 요소들 사이에 넣어서 하나의 문자열을 만들어 주는 메소드 */}
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
