import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "userToken",
  initialState: {
    token: null,
  },
  reducers: {
    updateToken: (state, { payload }) => {
      state.token = payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { updateToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
