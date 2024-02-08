import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { Form } from "../styles/components";
import Picture from "./Picture";
import { UserAuth } from "../context/AuthContext";
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

export default function Chat() {
  const [formValue, setFormValue] = useState("");
  const { user, logOut } = UserAuth();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages, loadingMessages, error] = useCollectionData(query, {
    idField: "id",
  });
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
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
        { messages && user !== null ? (
          messages.map((msg) => <Message key={msg.createdAt} message={msg} />)
        ) : (
          <p>Loading...</p>
        )}
      </ChatList>
      <Form onSubmit={sendMessage}>
        <Input onChange={(e) => setFormValue(e.target.value)}></Input>
        <Button type="submit">
          <Picture />
        </Button>
      </Form>
    </ContainerChat>
  );
}
