import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const exitItem = state?.cartItems?.filter(
        ({ id, name }) => id === payload?.id && name === payload?.name
      );

      if (
        exitItem[0]?.id !== payload?.id &&
        exitItem[0]?.name !== payload?.name
      ) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.error = "";
      } else {
        state.error = "Already added this item";
      }
    },
    addQuantity: (state, { payload }) => {
      const itemIndex = state?.cartItems?.findIndex(
        ({ id, name }) => id === payload?.id && name === payload?.name
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const itemIndex = state?.cartItems?.findIndex(
        ({ id, name }) => id === payload?.id && name === payload?.name
      );
      if (itemIndex >= 0) {
        const minQuant = state.cartItems[itemIndex].quantity;
        if (minQuant >= 2) {
          state.cartItems[itemIndex].quantity -= 1;
        }
      }
    },
    handleInputQuantity: (state, { payload }) => {
      const itemIndex = state?.cartItems?.findIndex(
        ({ id, name }) => id === payload?.id && name === payload?.name
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity = parseInt(payload.value);
        if (payload.value <= 0) {
          // state.error = "You can't set quantity zero !";
          state.cartItems[itemIndex].quantity = 1;
        }
      }
    },
    removeItem: (state, { payload }) => {
      const newItems = state?.cartItems?.filter(
        ({ id, name }) => id !== payload?.id && name !== payload?.name
      );
      state.cartItems = newItems;
    },
    removeAllItems: (state, { payload }) => {
      state.cartItems = [];
    },
  },
});
export const {
  addToCart,
  addQuantity,
  decreaseQuantity,
  handleInputQuantity,
  removeItem,
  removeAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
