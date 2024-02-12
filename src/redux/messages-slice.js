import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  messages: [],
  error: "",
  status: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessagesRequest: (state, action) => {
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
});

export const {
  getMessagesSuccess,
  getMessagesFailure,
  getMessagesRequest,
  addMessagesRequest,
} = messagesSlice.actions;

export default messagesSlice.reducer;
