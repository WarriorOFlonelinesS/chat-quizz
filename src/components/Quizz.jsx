import { useEffect, useState } from "react";
import { QuizzContainer } from "../styles/components";
import { Game } from "./Game";
import { Result } from "./Result";
import { questions } from "../questions";

export default function Quizz() {

  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <QuizzContainer>
      {step !== questions.length ? (
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
      )}
    </QuizzContainer>
  );
}
