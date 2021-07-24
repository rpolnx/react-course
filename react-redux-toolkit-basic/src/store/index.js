import counterReducer from "../components/counter/counter.slice.js";
import authReducer from "../components/auth/auth.slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    //counter: counterSlice.reducer, -- another reducer with specific key
  },
});

export default store;
