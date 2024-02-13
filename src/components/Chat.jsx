import { useEffect, useState, useRef } from "react";
import {
  ContainerChat,
  Input,
  Button,
  ChatList,
} from "../styles/components";
import { Message } from "./Message";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessagesRequest,
  getMessagesRequest,
} from "../redux/messages-slice";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { Spin } from "antd";

export default function Chat() {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const { user } = UserAuth();
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessagesRequest());
  }, [dispatch]);

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

  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ContainerChat>
      <ChatList>
        {messages && user !== null ? (
          messages.map((msg) => (
            <Message
              key={msg.createdAt}
              message={msg}
            />
          ))
        ) : (
          <Spin size="large" />
        )}
        <div ref={dummy}></div>
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
