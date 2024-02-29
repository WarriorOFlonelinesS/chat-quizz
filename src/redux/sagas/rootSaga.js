import { takeEvery } from "redux-saga/effects";

import {
  addMessageSaga,
  addRatingSaga,
  finishGameSaga,
  getMessagesSaga,
  getQuestionsSaga,
  getRatingSaga,
  readyForQuizSaga,
} from "./sagas";
import {
  addMessagesRequest,
  getMessagesRequest,
  userFinishAction,
  userReadyForQuizAction,
} from "../messages-slice";
import { getQuestionsRequest } from "../questions-slice";
import { addRating, addRatingRequest, getRatingRequest } from "../rating-slice";

export function* rootMessageSaga() {
  yield takeEvery(getMessagesRequest, getMessagesSaga);
  yield takeEvery(addMessagesRequest, addMessageSaga);
}

export function* rootQuestionsSaga() {
  yield takeEvery(userReadyForQuizAction, readyForQuizSaga);
  yield takeEvery(userFinishAction, finishGameSaga);
  yield takeEvery(getQuestionsRequest, getQuestionsSaga);
}

export function* rootRatingSaga(){
  yield takeEvery(getRatingRequest, getRatingSaga);
  yield takeEvery(addRatingRequest, addRatingSaga);
}
