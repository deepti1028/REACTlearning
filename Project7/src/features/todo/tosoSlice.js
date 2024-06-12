import { createSlice, nanoid } from "@reduxjs/toolkit";
const intialState = {
  todos: [{ id: 1, text: "helo world" }],
};
export const todoSlice = createSlice({
  name: "todo",
  intialState,
});
