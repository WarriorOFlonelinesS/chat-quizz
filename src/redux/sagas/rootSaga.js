import { takeEvery } from "redux-saga/effects";
import { GET_MESSAGES } from "../messages/actions";
import { getMessagesSaga } from "./sagas";

export function* rootSaga() {
    yield takeEvery(GET_MESSAGES, getMessagesSaga);
  }