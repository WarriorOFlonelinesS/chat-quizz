import {
  GameContainer,
  Line,
  LineProgress,
  ListOfQuestions,
  ProgressBar,
  Question,
} from "../styles/components";
export const Game = ({ step, question, onClickVariant, questions }) => {
  const precentage = Math.round((step / questions.length) * 100);
  return (
    <GameContainer>
      <ProgressBar>
        <LineProgress
          precentage={precentage}
        />
      </ProgressBar>
      <h1>{question.title}</h1>
      <ListOfQuestions>
        {question.variants.map((text, index) => (
          <Question onClick={() => onClickVariant(index)} key={text}>
            {text}
          </Question>
        ))}
      </ListOfQuestions>
    </GameContainer>
  );
};
