import { createSlice } from "@reduxjs/toolkit";
import { ISavedData } from "./savedData.type";

const initialState: ISavedData = {
  data: [],
};

export const savedData = createSlice({
  name: "savedData",
  initialState,
  reducers: {},
});

export default savedData.reducer;
