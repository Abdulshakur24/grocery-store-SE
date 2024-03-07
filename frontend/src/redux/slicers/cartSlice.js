import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += payload.quantity;
      } else {
        state.cart.push({ ...payload, quantity: payload.quantity });
      }
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },
    handleQuantity: (state, { payload }) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (existingProductIndex !== -1) {
        if (payload.action === "increment") {
          if (state.cart[existingProductIndex].quantity < 20) {
            state.cart[existingProductIndex].quantity++;
          }
        } else if (payload.action === "decrement") {
          if (state.cart[existingProductIndex].quantity > 1) {
            state.cart[existingProductIndex].quantity--;
          } else {
            state.cart.splice(existingProductIndex, 1);
          }
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, clearCart, handleQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
