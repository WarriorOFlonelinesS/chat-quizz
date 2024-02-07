import { auth } from "../firebase";
import { Avatar, StyledMessage, Time } from "../styles/components";

export const Message = ({ message }) => {
  const { uid, text, photoURL, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieve";
  const date = new Date(createdAt.seconds * 1000); // Помножте на 1000, оскільки Timestamp в секундах, а Date очікує мілісекунди
  const hours = ("0" + date.getHours()).slice(-2); // Додаємо "0" перед годинами та відбираємо останні 2 символи
  const minutes = ("0" + date.getMinutes()).slice(-2); // Додаємо "0" перед хвилинами та відбираємо останні 2 символи
  
  const formattedTime = `${hours}:${minutes}`;

  return (
    uid && (
      <StyledMessage messageClass={messageClass} key={createdAt}>
        <Avatar src={photoURL} />
        {text}
        <Time>{formattedTime}</Time>
      </StyledMessage>
    )
  );
};
