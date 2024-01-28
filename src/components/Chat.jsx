import { useState } from "react";
import {
  ContainerChat,
  Input,
  Button,
  ChatList,
  Item,
  Avatar,
  Header,
} from "./styles/styles";
import { Link, useLocation } from "react-router-dom";
import { Form } from "./styles/styles";
import Picture from "./Picture";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
  };
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ContainerChat>
      <Header>
        <Link to="/login">
          <Avatar />
        </Link>
      </Header>
      <ChatList>
        {messages.map((text) => {
          return <li>{text}</li>;
        })}
      </ChatList>
      <Form onSubmit={sendMessage}>
        <Input onChange={(e) => setMessage(e.target.value)}></Input>
        <Button type="submit">
          <Picture />
        </Button>
      </Form>
    </ContainerChat>
  );
}
