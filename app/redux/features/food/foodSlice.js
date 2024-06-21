import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodItem: [],
  isLoading: true,
  isError: false,
  error: "",
};

const foodSlice = createSlice({
  name: "foodItem",
  initialState,
  //   reducers: {
  //     addToCart: (state) => {
  //       state.foodItem = [];
  //     },
  //   },
});
// export const { addToCart } = foodSlice.actions;
export default foodSlice.reducer;
