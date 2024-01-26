import { takeEvery } from "redux-saga/effects";
import { GET_FEATURES } from "../features/actions";
import { getFeturesSaga } from "./sagas";

export function* rootSaga() {
    yield takeEvery(GET_FEATURES, getFeturesSaga);
  }