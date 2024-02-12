import { call, fork, put } from "redux-saga/effects";

import { getMessagesFailure, getMessagesSuccess } from "../messages-slice";
import { rsf } from "../../firebase"; // Подставьте соответствующий импорт Firebase

export function* getMessagesSaga() {
  yield fork(rsf.firestore.syncCollection, "messages", {
    successActionCreator: getMessagesSuccess,
    failureActionCreator: getMessagesFailure,
    transform: (payload) => {
      // Здесь вы можете преобразовать данные payload.docs перед тем, как они будут помещены в хранилище Redux
      const docs = payload.docs.map((doc) => doc.data())
      return [...docs].sort((a,b) => a.createdAt - b.createdAt);
    },
  });
}


export function* addMessageSaga(action) {
  const { text, uid, photoURL } = action.payload;
  try {
    yield call(rsf.firestore.addDocument, "messages", {
      text: text,
      createdAt: new Date(), // или используйте serverTimestamp(), если у вас есть такое поле в документе
      uid: uid,
      photoURL: photoURL,
    });
  } catch (error) {
    yield put(getMessagesFailure(error));
  }
}