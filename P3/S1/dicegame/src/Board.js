import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory, className }) {
  const classNames = `Board ${className}`;
  // gameHistory 배열이 비어있다면(길이가 0이면), 1을 num 변수에 할당
  const num = gameHistory[gameHistory.length - 1] || 1;
  // reduce 메서드는 각 요소에 대해 주어진 함수를 실행하고, 이전 값과 현재 값의 합산된 결과를 반환
  // gameHistory 배열의 모든 요소를 합산하여 sum 변수에 할당
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  // 게임이 종료되었는지 여부를 확인하여 Board-winner 클래스 추가
  const isWinner = gameHistory.length > 0 && sum >= 30;
  const winnerClass = isWinner ? "Board-winner" : "";

  // 한 쪽이라도 우승자 클래스가 붙으면 게임 종료
  if (isWinner) {
    alert(`${name} 우승! 게임이 종료됩니다.`);
  }

  return (
    <div className={`${classNames} ${winnerClass}`}>
      <h2>{name}</h2>
      <Dice color={color} num={num} className={className} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      {/* join: 아규먼트로 전달한 값을 배열의 각 요소들 사이에 넣어서 하나의 문자열을 만들어 주는 메소드 */}
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
