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
import { Link } from "react-router-dom";
import { Form } from "../styles/components";
import Picture from "./Picture";
import { UserAuth } from "../context/AuthContext";
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

export default function Chat() {
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages, loadingMessages, error] = useCollectionData(query, {
    idField: "id",
  });
  console.log(error);
  const [formValue, setFormValue] = useState("");
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
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
        <div className="flex justify-between bg-gray-200 w-full p-4">
          {user !== null && user?.displayName ? (
            <HeaderContent>
              <LogOut onClick={handleSignOut}>Logout</LogOut>
            </HeaderContent>
          ) : (
            <LinkAuth to="/signin">Sign in</LinkAuth>
          )}
        </div>
      </Header>
      <ChatList>
        {!loadingMessages && messages && user !== null ? (
          messages.map((msg) => <Message message={msg} />)
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
