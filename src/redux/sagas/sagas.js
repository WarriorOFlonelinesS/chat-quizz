import { call, fork, put } from "redux-saga/effects";

import { getMessagesFailure, getMessagesSuccess } from "../messages-slice";
import { rsf } from "../../firebase"; 
export function* getMessagesSaga() {
  yield fork(rsf.firestore.syncCollection, "messages", {
    successActionCreator: getMessagesSuccess,
    failureActionCreator: getMessagesFailure,
    transform: (payload) => {
      const docs = payload.docs.map((doc) => doc.data());
      return [...docs].sort((a, b) => a.createdAt - b.createdAt);
    },
  });
}

export function* addMessageSaga(action) {
  const { text, uid, photoURL } = action.payload;
  try {
    yield call(rsf.firestore.addDocument, "messages", {
      text: text,
      createdAt: new Date(),
      uid: uid,
      photoURL: photoURL,
    });
  } catch (error) {
    yield put(getMessagesFailure(error.message));
  }
}

export function* readyForQuizSaga(action) {
  const { userName } = action.payload;
  try {
    yield call(rsf.firestore.addDocument, "messages", {
      text: `${userName} начал игру!`,
      createdAt: new Date(),
      photoURL: "https://upload.wikimedia.org/wikipedia/ru/0/0a/Saw-billy.jpg",
      uid: "uidl8ATxoZM14GsEqUs6Vk",
    });
  } catch (error) {
    yield put(getMessagesFailure(error.message));
  }
}

export function* finishGameSaga(action) {
  const { userName, uid } = action.payload;
  try {
    yield call(rsf.firestore.addDocument, "messages", {
      text: `${userName} закончил игру!`,
      createdAt: new Date(),
      photoURL: "https://upload.wikimedia.org/wikipedia/ru/0/0a/Saw-billy.jpg",
      uid: "uidl8ATxoZM14GsEqUs6Vk",
    });
  } catch (error) {
    yield put(getMessagesFailure(error.message));
  }
}
