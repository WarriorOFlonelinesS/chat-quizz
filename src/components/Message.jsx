import { auth } from "../firebase";
import { Avatar, StyledMessage, Time } from "../styles/components";

export const Message = ({ message }) => {
  const { uid, text, photoURL, createdAt } = message;
  if (!createdAt || !createdAt.seconds) {
    // Обработка ситуации, когда createdAt отсутствует или не содержит seconds
    return null;
  }
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieve";
  const date = new Date(createdAt.seconds * 1000); 
  const hours = ("0" + date.getHours()).slice(-2); 
  const minutes = ("0" + date.getMinutes()).slice(-2);
  
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
