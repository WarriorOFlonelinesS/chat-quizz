import { createSelector } from "reselect";
export const getState = (state) => state.messages;

export const getAllMessages = createSelector(
  getState,
  (messagesState) => messagesState.messages
);
