import styled from "styled-components";
import Input from "./Input";
import Login from "./Login";
import SearchInput from "./SearchInput";

const Container = styled.div`
  ${Input} {
    margin: 8px;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Login />
        <h2>Size</h2>
        <Input size="small" />
        <Input size="medium" />
        <Input size="large" />
        <h2>Round</h2>
        <Input round />
        <h2>Error</h2>
        <Input error />
        <h2>Search Input</h2>
        <SearchInput />
      </Container>
    </>
  );
}

export default App;
