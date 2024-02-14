import { takeEvery } from "redux-saga/effects";

import {
  addMessageSaga,
  finishGameSaga,
  getMessagesSaga,
  getQuestionsSaga,
  readyForQuizSaga,
} from "./sagas";
import {
  addMessagesRequest,
  getMessagesRequest,
  userFinishAction,
  userReadyForQuizAction,
} from "../messages-slice";

export function* rootSaga() {
  yield takeEvery(getMessagesRequest, getMessagesSaga);
  yield takeEvery(addMessagesRequest, addMessageSaga);
  yield takeEvery(userReadyForQuizAction, readyForQuizSaga);
  yield takeEvery(userFinishAction, finishGameSaga);
}
