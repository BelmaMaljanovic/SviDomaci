import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { lista: [], prevedenaLista: [], loading: false };
export const getPrevedeno = createAsyncThunk(
  "global/getPrevedeno",
  async ({ input, opcija, jezik }) => {
    let res;
    var url = `https://newsapi.org/v2/everything?q=${input}&language=${jezik}&sortBy=${opcija}&sortBy=publishedAt&apiKey=42db0f4ba8144ae0b2e9af8b2c443c33`;
    await axios.get(url).then((data) => {
      res = data.data.articles;
    });
    return res;
  }
);

export const getPosts = createAsyncThunk(
  "global/getPosts",
  async (input, thunkAPI) => {
    let res;
    let url2 = `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&apiKey=42db0f4ba8144ae0b2e9af8b2c443c33`;
    await axios.get(url2).then((data) => {
      res = data.data.articles;
    });
    return res;
  }
);
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.lista = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [getPrevedeno.pending]: (state) => {
      state.loading = true;
    },
    [getPrevedeno.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.prevedenaLista = payload;
    },
    [getPrevedeno.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default globalSlice.reducer;
