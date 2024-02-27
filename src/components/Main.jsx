import { FlexContainer } from "../styles/components";
import { GlobalStyle } from "../styles/globalStyle";
import Quizz from "./Quizz";
import Chat from "./Chat";
import { Start } from "./Start";
import { useState } from "react";
import { Header } from "./Header";
import { UserAuth } from "../context/AuthContext";
import { Warning } from "./Warning";
import { useStart } from "../context/StartContext";

export function Main() {
  const { user } = UserAuth();
  const { start } = useStart();
  const [show, setShow] = useState(false);
  return (
    <div data-testid="main">
      <GlobalStyle />
      <Header setShow={setShow} show={show} />

      {user ? (
        <FlexContainer>
          {start ? <Quizz show={show} /> : <Start show={show} />}
          <Chat show={show} />
        </FlexContainer>
      ) : (
        <Warning />
      )}
    </div>
  );
}
