import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
        let target = state.items.find(item => item.id == action.payload)
        let indexOftarget = state.items.indexOf(target)
        state.items.splice(indexOftarget, 1)
    }
  },
});

export const { addToBasket ,removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
