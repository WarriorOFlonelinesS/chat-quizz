import { FlexContainer } from "../styles/components";
import { GlobalStyle } from "../styles/globalStyle";
import Quizz from "./Quizz";
import Chat from "./Chat";

export function Main() {
  return (
    <>
      <GlobalStyle />
      <FlexContainer>
        <Quizz />
        <Chat />
      </FlexContainer>
    </>
  );
}
