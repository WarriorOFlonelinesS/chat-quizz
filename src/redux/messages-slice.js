import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  messages: [],
  error: '',
  status: ''
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    getMessagesSuccess: (state, action) => {
      state.status = "succeeded";
      state.messages = action.payload;
  
    },
    getMessagesFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getMessagesSuccess,
  getMessagesFailure,
} = messagesSlice.actions;

export default messagesSlice.reducer;