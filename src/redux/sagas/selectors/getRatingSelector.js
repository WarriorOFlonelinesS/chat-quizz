import { createSelector } from "reselect";
export const getState = (state) => state.rating;

export const getRating = createSelector(
  getState,
  (ratingState) => ratingState.rating
);
