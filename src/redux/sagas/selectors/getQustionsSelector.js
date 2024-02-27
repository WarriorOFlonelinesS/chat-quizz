import { createSelector } from "reselect";
export const getState = (state) => state.questions;

export const getAllQuestions = createSelector(
  getState,
  (questionsState) => questionsState.questions
);
