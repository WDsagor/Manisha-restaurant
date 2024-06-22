import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const exitItem = state?.cartItems?.filter(
        ({ id, name }) => id === payload?.id && name === payload?.name
      );
      if (
        exitItem[0]?.id !== payload?.id &&
        exitItem[0]?.name !== payload?.name
      ) {
        state.cartItems.push(payload);
        state.error = "";
      } else {
        state.error = "Already added this item";
      }

      // console.log(exitItem[0].id, exitItem[0].name);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
