import { useState } from "react";
import {
  QuizzContainer,
  Content,
  Footer,
  Title,
} from "../styles/components";
import { Game } from "./Game";
import { Result } from "./Result";

export default function Quizz() {
  const questions = [
    {
      title: "React - это ... ?",
      variants: ["библиотека", "фреймворк", "приложение"],
      correct: 0,
    },
    {
      title: "Компонент - это ... ",
      variants: [
        "приложение",
        "часть приложения или страницы",
        "то, что я не знаю что такое",
      ],
      correct: 1,
    },
    {
      title: "Что такое JSX?",
      variants: [
        "Это простой HTML",
        "Это функция",
        "Это тот же HTML, но с возможностью выполнять JS-код",
      ],
      correct: 2,
    },
  ];

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
        <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions}/>
      ) : (
        <Result correct={correct} setStep={setStep} setCorrect={setCorrect} questions={questions}/>
      )}
    </QuizzContainer>
  );
}
