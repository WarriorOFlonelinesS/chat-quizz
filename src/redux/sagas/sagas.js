import { call, put } from "redux-saga/effects";
import { db } from "../../firebase";
import { getMessageApi } from "./getMessage";
import { getMessagesSuccess } from "../messages-slice";


export function* getMessagesSaga() {
 const response = yield getMessageApi()

 yield  put( getMessagesSuccess(response))
}
    // Виконайте потрібні дії з отриманими даними