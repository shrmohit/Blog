import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: userReducer,
});

const persistConfig = {
  key: "root",
  storage, // using localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
