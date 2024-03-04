import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const actionTypes = ["info", "status", "pic"];

const asyncThunks = actionTypes.reduce(
  (thunks, actionType) => ({
    ...thunks,
    [actionType]: createAsyncThunk(
      `user/update${actionType.charAt(0).toUpperCase() + actionType.slice(1)}`,
      async (data) => {
        try {
          await api.put(`/user/${actionType}`, data);
        } catch (err) {
          console.error(err);
        }
      }
    ),
  }),
  {}
);

const initialState = {
  user: null,
  loadings: {
    info: false,
    status: false,
    pic: false,
  },
};

export const updateProfile = createAsyncThunk(
  "user/update",
  async ({ url, data, token }) => {
    try {
      await api.put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      if (payload === null) {
        state.user = null;
        return;
      }
      state.user = { ...state.user, ...payload };
    },
    loadUser: (state, { payload }) => {
      state.user = payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    actionTypes.forEach((actionType) => {
      builder
        .addCase(asyncThunks[actionType].pending, (state) => {
          state.loadings[actionType] = true;
        })
        .addCase(asyncThunks[actionType].fulfilled, (state) => {
          state.loadings[actionType] = false;
        })
        .addCase(asyncThunks[actionType].rejected, (state) => {
          state.loadings[actionType] = false;
        });
    });
  },
});

export const { loadUser, logout, updateUser } = userSlice.actions;

export const { info, status, pic } = asyncThunks;

export default userSlice.reducer;
