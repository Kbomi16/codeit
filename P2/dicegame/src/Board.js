import Dice from "./Dice";

function Board({ name, color, gameHistory }) {
  // gameHistory 배열이 비어있다면(길이가 0이면), 1을 num 변수에 할당
  const num = gameHistory[gameHistory.length - 1] || 1;
  // reduce 메서드는 각 요소에 대해 주어진 함수를 실행하고, 이전 값과 현재 값의 합산된 결과를 반환
  // gameHistory 배열의 모든 요소를 합산하여 sum 변수에 할당
  const sum = gameHistory.reduce((a, b) => a + b, 0);
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
