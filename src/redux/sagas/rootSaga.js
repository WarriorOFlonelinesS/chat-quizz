import { takeEvery } from "redux-saga/effects";

import { addMessageSaga, getMessagesSaga } from "./sagas";
import { addMessagesRequest, getMessagesRequest } from "../messages-slice";

export function* rootSaga() {
  yield takeEvery(getMessagesRequest, getMessagesSaga);
  yield takeEvery(addMessagesRequest, addMessageSaga);
}
