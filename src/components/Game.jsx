  import {
  GameContainer,
  LineProgress,
  ListOfQuestions,
  ProgressBar,
  Question,
  Title,
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
      <Title>{question.title}</Title>
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
