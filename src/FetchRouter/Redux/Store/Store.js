import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../Slices/SliceGlobal";
import SliceInput from "../Slices/SliceInput";

export default configureStore({
  reducer: {
    global: globalSlice,
    input: SliceInput,
  },
  //midleware:[thunk]
});
