import HandButton from "./HandButton";

function App() {
  const handleClick = (value) => console.log(value);
  return (
    <>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </>
  );
}

export default App;

