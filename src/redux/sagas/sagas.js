import { put } from "redux-saga/effects";
import { getMessageApi } from "./getMessage";
import { getMessagesFailure, getMessagesSuccess } from "../messages-slice";
import { call } from "redux-saga/effects";
import { rsf } from "../../firebase"; // Подставьте соответствующий импорт Firebase
import { actions } from "redux-saga-firebase"; // Импортируйте необходимые действия Firestore

export function* getMessagesSaga() {
  //  const response = yield getMessageApi()
  //  yield  put( getMessagesSuccess(response))
      try {
        const snapshot = yield call(rsf.firestore.getCollection, "messages"); // Чтение коллекции сообщений из Firestore
        const messages = {};
        snapshot.forEach((doc) => {
          messages[doc.id] = doc.data(); // Преобразование документов Firestore в объект сообщений
        });
        console.log(messages)
        // Обработка полученных сообщений здесь, например, отправка их в стор Redux
        yield put(getMessagesSuccess(messages)); // Отправка сообщений в стор Redux
      } catch (error) {
        // Обработка ошибок здесь
        console.error("Error fetching messages:", error);
        yield put(getMessagesFailure(error)); // Отправка ошибки в стор Redux
      }
    }

    // Делайте с messages то, что вам необходимо здесь
  
// Виконайте потрібні дії з отриманими даними
