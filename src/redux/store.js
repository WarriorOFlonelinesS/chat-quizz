import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  rootMessageSaga,
  rootQuestionsSaga,
  rootRatingSaga,
  rootSaga,
} from "./sagas/rootSaga";
import messagesReducer from "./messages-slice";
import questionsReduser from "./questions-slice";
import ratingReducer from "./rating-slice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  questions: questionsReduser,
  messages: messagesReducer,
  rating: ratingReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootMessageSaga);
sagaMiddleware.run(rootQuestionsSaga);
sagaMiddleware.run(rootRatingSaga);

export default store;
