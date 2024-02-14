import { FlexContainer } from "../styles/components";
import { GlobalStyle } from "../styles/globalStyle";
import Quizz from "./Quizz";
import Chat from "./Chat";
import { Start } from "./Start";
import { useState } from "react";
import { Header } from "./Header";
import { UserAuth } from "../context/AuthContext";
import { Warning } from "./Warning";
import { useStart, StartProvider } from "../context/StartContext";

export function Main() {
  const { user } = UserAuth();
  const { start } = useStart();
  const startFromLocale = localStorage.getItem("start");
  return (
    <>
      <GlobalStyle />
      <Header />
      {user ? (
        <FlexContainer>
          {start || startFromLocale !== null ? <Quizz /> : <Start />}
          <Chat />
        </FlexContainer>
      ) : (
        <Warning />
      )}
    </>
  );
}
