import HandButton from "./HandButton";
import Button from "./Button";

function App() {
  const handleClick = (value) => console.log(value);
  const handleClearClick = (name) => console.log(name)
  return (
    <>
    <Button onClick={handleClearClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </>
  );
}

export default App;

