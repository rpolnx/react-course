import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, { payload }) {
      state.notification = payload;
    },
  },
});

export const selectCartIsVisible = ({ ui }) => ui.cartIsVisible;
export const selectNotification = ({ ui }) => ui.notification;

export const { toggle, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
