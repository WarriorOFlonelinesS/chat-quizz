import { createAction } from "@reduxjs/toolkit";

export const GET_MESSAGES = "messages/getMessage";
export const getMessage = createAction(GET_MESSAGES);