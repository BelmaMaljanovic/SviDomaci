import { createSlice } from "@reduxjs/toolkit";
const initialState = { input: "" };

export const SliceInput = createSlice({
  name: "input",
  initialState,
  reducers: {
    noviIput: (state, action) => {
      state.input = action.payload;
    },
  },
});
export const { noviIput } = SliceInput.actions;
export default SliceInput.reducer;
