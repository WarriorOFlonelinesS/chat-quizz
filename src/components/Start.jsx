import { useDispatch } from "react-redux";
import { UserAuth } from "../context/AuthContext";
import { useStart } from "../context/StartContext";
import { auth } from "../firebase";
import { StartButton, StartContainer, StartTitle } from "../styles/components";
import { userReadyForQuizAction } from "../redux/messages-slice";

export const Start = ({ show }) => {
  const dispatch = useDispatch();
  const { setStart } = useStart();
  const { user } = UserAuth();
  const startQuiz = (e) => {
    e.preventDefault();
    setStart(true);
    const { uid } = auth.currentUser;
    dispatch(
      userReadyForQuizAction({
        uid: uid,
        userName: user.displayName,
        ready: true,
      })
    );
  };

  return (
    <StartContainer show={show}>
      <StartTitle>Я хочу сыграть с вами в игру!</StartTitle>
      <StartButton onClick={startQuiz}>Сыграть</StartButton>
    </StartContainer>
  );
};
