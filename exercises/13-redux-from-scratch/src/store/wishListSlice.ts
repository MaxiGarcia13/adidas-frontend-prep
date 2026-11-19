import { createSlice } from '@reduxjs/toolkit';

interface WishListState {
  productsIds: string[];
}

const initialState: WishListState = {
  productsIds: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    toggleWishList: (state, action) => {
      if (state.productsIds.includes(action.payload)) {
        state.productsIds = state.productsIds.filter((id) => id !== action.payload);
      } else {
        state.productsIds.push(action.payload);
      }
    },
  },
});
