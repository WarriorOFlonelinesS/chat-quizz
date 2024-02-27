import { useEffect, useState } from "react";
import { QuizzContainer } from "../styles/components";
import { Game } from "./Game";
import { Result } from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsRequest } from "../redux/questions-slice";
import { Spin } from "antd";
import { getAllQuestions } from "../redux/sagas/selectors/getQustionsSelector";

export default function Quizz({ show }) {
  const questions = useSelector(getAllQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsRequest());
  }, [dispatch]);

  const [step, setStep] = useState(0);
  const question = questions.length > 0 && questions[step];
  const [correct, setCorrect] = useState(0);
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <QuizzContainer show={show}>
      {questions.length !== 0 ? (
        step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            questions={questions}
          />
        ) : (
          <Result
            correct={correct}
            setStep={setStep}
            setCorrect={setCorrect}
            questions={questions}
          />
        )
      ) : (
        <Spin />
      )}
    </QuizzContainer>
  );
}
