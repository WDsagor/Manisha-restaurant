import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./features/food/foodSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    // [foodSlice.reducerPath]: foodSlice.reducer,
    cartItem: cartSlice,
    foodItem: foodSlice,
  },
});
export default store;
