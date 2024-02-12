import { useState } from "react";
import {
  ContainerChat,
  Input,
  Button,
  ChatList,
  Header,
  HeaderContent,
  LogOut,
  LinkAuth,
} from "../styles/components";
import { Message } from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { addMessagesRequest } from "../redux/messages-slice";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { Spin } from "antd";

export default function Chat() {
  const [formValue, setFormValue] = useState("");
  const { user, logOut } = UserAuth();
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    dispatch(
      addMessagesRequest({
        text: formValue,
        createdAt: new Date(),
        uid,
        photoURL,
      })
    );
    setFormValue("");
  };

  return (
    <ContainerChat>
      <Header>
        {user !== null && user?.displayName ? (
          <HeaderContent>
            <LogOut onClick={handleSignOut}>Logout</LogOut>
          </HeaderContent>
        ) : (
          <LinkAuth to="/signin">Sign in</LinkAuth>
        )}
      </Header>
      <ChatList>
        {messages && user !== null ? (
          messages.map((msg) => <Message key={msg.createdAt} message={msg} />)
        ) : (
          <Spin size="large"/>
        )}
      </ChatList>
      <form onSubmit={handleSubmit}>
        <Input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </ContainerChat>
  );
}
