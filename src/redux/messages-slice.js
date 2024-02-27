import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  messages: [],
  error: "",
  userReadyForQuiz: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessagesRequest: (state) => {
      state.isLoading = true;
    },
    getMessagesRequest: (state) => {
      state.isLoading = true;
    },
    getMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    getMessagesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userReadyForQuizAction, (state, action) => {
      state.userReadyForQuiz = action.payload.ready;
    });
    builder.addCase(userFinishAction, (state, action) => {
      state.userReadyForQuiz = "";
    });
  },
});

export const {
  getMessagesSuccess,
  getMessagesFailure,
  getMessagesRequest,
  addMessagesRequest,
} = messagesSlice.actions;

export default messagesSlice.reducer;

export const userReadyForQuizAction = createAction(
  "userReadyForQuiz/userReadyForQuiz"
);
export const userFinishAction = createAction("userReadyForQuiz/userFinishGame");
