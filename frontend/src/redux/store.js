import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userState from "./slicers/userSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

const rootReducer = combineReducers({
  userState,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    version: 0.1,
    blacklist: ["userState"],
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
