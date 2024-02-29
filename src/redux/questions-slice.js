import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  questions: [],
  error: "",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestionsRequest: (state) => {
      state.isLoading = true;
    },
    getQuestionsSuccess: (state, action) => {
      state.questions = action.payload;
      state.isLoading = false;
    },
    getQuestionsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getQuestionsSuccess, getQuestionsFailure, getQuestionsRequest } =
  questionsSlice.actions;

export default questionsSlice.reducer;
