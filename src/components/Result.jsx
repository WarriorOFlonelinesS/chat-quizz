import { useDispatch, useSelector } from "react-redux";
import { useStart } from "../context/StartContext";
import {
  ButtonBack,
  Image,
  ResultContainer,
  ResultTitle,
} from "../styles/components";
import { UserAuth } from "../context/AuthContext";
import { userFinishAction } from "../redux/messages-slice";
import { auth } from "../firebase";
import { addRatingRequest, getRatingRequest } from "../redux/rating-slice";
import { useEffect } from "react";
import { getRating } from "../redux/sagas/selectors/getRatingSelector";

export const Result = ({ correct, setStep, setCorrect, questions }) => {
  const rating = useSelector(getRating);
  const dispatch = useDispatch();
  const { setStart } = useStart();
  const { user } = UserAuth();

  useEffect(() => {
    dispatch(getRatingRequest());
    dispatch(
      addRatingRequest({
        photoURL: user.photoURL,
        uid: user.uid,
        score: correct,
        userName: user.displayName,
      })
    );
  }, []);

  const comeBack = () => {
    setStep(0);
    setCorrect(0);
  };
  const { uid } = auth.currentUser;
  const finishGame = (e) => {
    setStart(false);
    localStorage.removeItem("start");
    e.preventDefault();
    dispatch(
      userFinishAction({
        uid,
        userName: user.displayName,
        ready: false,
      })
    );
  };

  return (
    <ResultContainer>
      {correct > Math.round(correct / 2) ? (
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt="win"
        />
      ) : (
        <Image
          src="https://e7.pngegg.com/pngimages/222/140/png-clipart-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-thumbnail.png"
          alt="lose"
        />
      )}
      <ResultTitle>
        Вы отгадали {correct} ответа из {questions.length}
      </ResultTitle>
      <ol>
        {rating.length > 0 &&
          rating.map((number) => {
            return (
              <li>
                {number.userName} score: {number.score}
              </li>
            );
          })}
      </ol>
      <ButtonBack onClick={comeBack}>Попробовать снова 👀</ButtonBack>
      <ButtonBack onClick={finishGame}>Закончить игру</ButtonBack>
    </ResultContainer>
  );
};
