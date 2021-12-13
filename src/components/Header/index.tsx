import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="dt money logo features the app name in a custom type style"
        />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}
