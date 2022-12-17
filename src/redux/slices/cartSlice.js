import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });

        state.totalPrice = state.cartItems.reduce((sum, obj) => {
          return sum + obj.price * obj.count;
        }, 0);
      }
    },
    plusItem(state, action) {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, minusItem, plusItem, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
