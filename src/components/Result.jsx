import { useDispatch } from "react-redux";
import { useStart } from "../context/StartContext";
import { ButtonBack, ResultContainer } from "../styles/components";
import { UserAuth } from "../context/AuthContext";
import { userFinishAction } from "../redux/messages-slice";
import { auth } from "../firebase";

export const Result = ({ correct, setStep, setCorrect, questions }) => {
  const dispatch = useDispatch()
  const { setStart } = useStart();
  const { user } = UserAuth();


  const comeBack = () => {
    setStep(0);
    setCorrect(0);
  };

  const finishGame = (e) => {
    setStart(false);
    e.preventDefault();
    const { uid } = auth.currentUser;
    dispatch(
      userFinishAction({
        uid:uid,
        ready:false,
        userName: user.displayName
      })
    );
  };

  return (
    <ResultContainer>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <ButtonBack onClick={comeBack}>Попробовать снова 👀</ButtonBack>
      <ButtonBack onClick={finishGame}>Закончить игру</ButtonBack>
    </ResultContainer>
  );
};
