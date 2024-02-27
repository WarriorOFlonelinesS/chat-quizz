import { auth } from "../firebase";
import { Avatar, StyledMessage, Time } from "../styles/components";
import { getDate } from "../helpers/getDate";

export const Message = ({ message }) => {
  const { uid, text, photoURL, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieve";

  return (
    uid && (
      <StyledMessage messageClass={messageClass} key={createdAt}>
        <Avatar src={photoURL} />
        {text}
        <Time>{getDate(createdAt)}</Time>
      </StyledMessage>
    )
  );
};
