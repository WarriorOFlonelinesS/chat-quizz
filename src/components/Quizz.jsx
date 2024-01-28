import Progress from "./Progress";
import Question from "./Question";
import {
  Container,
  Content,
  Footer,
  ListOfQuestions,
  Title,
} from "./styles/styles";

export default function Quizz() {
  const array = [
    "how areeeeeeeeeeeeee you good?",
    "how you good?",
    "how you good?",
    "how you good?",
  ];
  return (
    <Container>
      <Content>
        <Title>1. Когда был создан JavaScript?</Title>
        <ListOfQuestions>
          {array.map((question) => {
            return <Question question={question} />;
          })}
        </ListOfQuestions>
      </Content>
      <Footer>
        <Progress />
      </Footer>
    </Container>
  );
}
