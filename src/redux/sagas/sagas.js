import { call, fork, put } from "redux-saga/effects";

import { getMessagesFailure, getMessagesSuccess } from "../messages-slice";
import { db, rsf } from "../../firebase"; // Подставьте соответствующий импорт Firebase
import { getQuestionsFailure, getQuestionsSuccess } from "../questions-slice";
import {
  addRatingFailure,
  getRatingFailure,
  getRatingSuccess,
} from "../rating-slice";

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
  const { userName, uid, ready } = action.payload;
  try {
    yield call(rsf.firestore.setDocument, `userReadiness/${uid}`, {
      uid: uid,
      ready: ready,
    });

    if (ready) {
      yield call(rsf.firestore.addDocument, "messages", {
        text: `${userName} начал(а) игру!`,
        createdAt: new Date(),
        photoURL:
          "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-on-computer_23-2150010130.jpg",
        uid: "uidl8ATxoZM14GsEqUs6Vk",
      });
    }
  } catch (error) {
    yield console.log(error);
  }
}

export function* finishGameSaga(action) {
  const { userName, uid, ready } = action.payload;
  try {
    yield call(rsf.firestore.deleteDocument, `userReadiness/${uid}`, {
      uid: uid,
      ready: ready,
    });
    yield call(rsf.firestore.addDocument, "messages", {
      text: `${userName} закончил(а) игру!`,
      createdAt: new Date(),
      // https://upload.wikimedia.org/wikipedia/ru/0/0a/Saw-billy.jpg
      photoURL:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-on-computer_23-2150010130.jpg",
      uid: "uidl8ATxoZM14GsEqUs6Vk",
    });
  } catch (error) {
    yield put(getMessagesFailure(error.message));
  }
}

export function* getQuestionsSaga() {
  try {
    const querySnapshot = yield call(() => db.collection("questions").get());
    const questionsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    yield put(getQuestionsSuccess(questionsArray));
  } catch (error) {
    yield put(getQuestionsFailure(error.message));
  }
}

export function* getRatingSaga() {
  yield fork(rsf.firestore.syncCollection, "rating", {
    successActionCreator: getRatingSuccess,
    failureActionCreator: getRatingFailure,
    transform: (payload) => {
      const docs = payload.docs.map((doc) => doc.data());
      return [...docs].sort((a, b) => b.score - a.score);
    },
  });
}

export function* addRatingSaga(action) {
  try {
    const { userName, uid, photoURL, score } = action.payload;
    yield call(rsf.firestore.setDocument, `rating/${uid}`, {
      uid: uid,
      photoURL: photoURL,
      userName: userName,
      score: score,
    });
  } catch (error) {
    yield put(addRatingFailure(error.message));
  }
}
