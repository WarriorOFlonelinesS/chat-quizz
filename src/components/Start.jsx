import { useDispatch } from "react-redux";
import { UserAuth } from "../context/AuthContext";
import { useStart } from "../context/StartContext";
import { auth } from "../firebase";
import { StartButton, StartContainer, Title } from "../styles/components";
import { userReadyForQuizAction } from "../redux/messages-slice";

export const Start = () => {
  const dispatch = useDispatch()
  const { setStart } = useStart();
  const { user } = UserAuth();
  const startQuiz = (e) => {
    e.preventDefault();
    setStart(true)
    const { uid } = auth.currentUser;
    dispatch(
      userReadyForQuizAction({
        uid:uid,
        ready:true,
        userName: user.displayName
      })
    );
  };

  return (
    <StartContainer>
      <Title>Я хочу сыграть с вами в игру!</Title>
      <StartButton onClick={startQuiz}>Сыграть</StartButton>
    </StartContainer>
  );
};
