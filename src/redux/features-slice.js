import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  features: [],
};

const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    getFeaturesSuccess: (state, action) => {
      state.status = "succeeded";
      state.features = action.payload;
    },
    getfeaturesFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getFeaturesSuccess,
  getFeaturesFailure,
} = featuresSlice.actions;

export default featuresSlice.reducer;