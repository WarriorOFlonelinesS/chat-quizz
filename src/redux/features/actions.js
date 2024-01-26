import { createAction } from "@reduxjs/toolkit";

export const GET_FEATURES = "movies/getFeatures";
export const getFeatures = createAction(GET_FEATURES);