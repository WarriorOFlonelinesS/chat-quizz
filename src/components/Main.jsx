import { useEffect } from "react";
import { getFeatures } from "../redux/features/actions";
import { useDispatch, useSelector } from "react-redux";
import { FlexContainer } from "../components/styles/styles";
import { GlobalStyle } from "./styles/globalStyle";
import Quizz from "./Quizz";
import Chat from "./Chat";

export function Main() {
  const features = useSelector((state) => state.features.features);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeatures());
  }, []);
  return (
    <>
      <GlobalStyle/>
      <FlexContainer>
        <Quizz />
        <Chat />
      </FlexContainer>
    </>
  );
}
