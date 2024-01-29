import { useState } from "react";
import {
  ContainerChat,
  Input,
  Button,
  ChatList,
  Item,
  Avatar,
  Header,
  HeaderContent
} from "./styles/styles";
import { Link, useLocation } from "react-router-dom";
import { Form } from "./styles/styles";
import Picture from "./Picture";
import { UserAuth } from "../context/AuthContext";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
  };
  const location = useLocation();
  console.log(location.pathname);
  console.log(user);
  return (
    <ContainerChat>
      <Header>
        <div className="flex justify-between bg-gray-200 w-full p-4">
          {user?.displayName ? (
            <HeaderContent>
              <Avatar src={user.photoURL} />
              <button onClick={handleSignOut}>Logout</button>
            </HeaderContent>
          ) : (
            <Link to="/signin">Sign in</Link>
          )}
        </div>
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
