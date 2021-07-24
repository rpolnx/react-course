import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, { payload }) {
      state.totalQuantity = payload.totalQuantity;
      state.items = payload.items;
    },
    addItemToCart(state, { payload: newItem }) {
      const existingItem = state.items.find((it) => it.itemId === newItem.id);
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, { payload: id }) {
      const existingItem = state.items.find((it) => it.itemId === id);
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((it) => it.itemId !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const itemsSelector = ({ cart }) => cart.items;
export const cartSelector = ({ cart }) => cart;
export const totalQuantitySelector = ({ cart }) => cart.totalQuantity;

export const { replaceCart, addItemToCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
