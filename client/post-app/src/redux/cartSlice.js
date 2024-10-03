import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).cartItems
      : [],
    total: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).total
      : 0,
    tax: 8,
  },
  reducers: {
    addPrd: (state, action) => {
      let nor = state.cartItems.some((item) => item._id === action.payload._id);

      if (nor) {
        const founded = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
        state.total += founded.price;
        founded.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
        state.total += action.payload.price;
      }
    },
    delPrd: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    updPrd: (state, action) => {
      const founded = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (action.payload.cmd === "increase") {
        const founded = state.cartItems.find(
          (item) => item._id === action.payload._id
        );

        founded.quantity += 1;
        state.total += action.payload.price;
      } else {
        if (founded.quantity === 1) {
          let answer = window.confirm(
            "Ürünü Silmek İstediğinize Eminmisiniz? "
          );
          if (answer) {
            state.cartItems = state.cartItems.filter(
              (item) => item._id !== action.payload._id
            );
            state.total -= action.payload.price * action.payload.quantity;
          }
        } else {
          const founded = state.cartItems.find(
            (item) => item._id === action.payload._id
          );
          founded.quantity -= 1;
          state.total -= action.payload.price;
        }
      }
    },
    reset: (state) => {
      if (state.cartItems.length !== 0) {
        let answer = window.confirm(
          "Sepeti Temizlemek İstediğinize Eminmisiniz? "
        );
        if (answer) {
          state.cartItems = [];
          state.total = 0;
          message.success("Sepet Başarıyla Temizlendi.");
        }
      }
    },
  },
});

export const { addPrd, delPrd, updPrd, reset } = cartSlice.actions;
export default cartSlice.reducer;
