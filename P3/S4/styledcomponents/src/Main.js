import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Link from "./Link";
import KakaoButton from "./KakaoButton";
import codeitLogo from "./codeit.png";
import Counter from "./Counter";

const Logo = styled.img`
  display: block;
  margin: 16px auto;
  width: 200px;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }

  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Counter />
        {/* <Logo src={codeitLogo} alt="codeit" />
        <Description>
          회원이 아니신가요? <Link href="#">회원가입 하기</Link>
        </Description>
        <form>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="styled@codeit.kr"
          />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
          />
          <Button type="submit">로그인 하기</Button>
        </form>
        <KakaoButton /> */}
      </Container>
    </>
  );
}

export default App;
