// rating-slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: [],
  loading: false,
  error: null,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    getRatingRequest(state) {
      state.loading = true;
    },
    getRatingSuccess(state, action) {
      state.rating = action.payload;
      state.loading = false;
      state.error = null;
    },
    getRatingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addRatingRequest(state) {
      state.loading = true;
    },
  },
});

export const {
  getRatingRequest,
  getRatingSuccess,
  getRatingFailure,
  addRatingRequest,
  addRatingSuccess,
  addRatingFailure,
} = ratingSlice.actions;

export default ratingSlice.reducer;
