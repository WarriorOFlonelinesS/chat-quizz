import { useEffect } from "react";
import { getMessage } from "../redux/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { FlexContainer } from "../styles/components";
import { GlobalStyle } from "../styles/globalStyle";
import Quizz from "./Quizz";
import Chat from "./Chat";
import { rootSaga } from "../redux/sagas/rootSaga";

export function Main() {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch.messages]);

  console.log(messages);
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
