import { create } from 'zustand';

interface WishListState {
  wishListIds: string[];
}

interface WishListActions {
  toggleWishlist: (productId: string) => void;
}

export const useWishList = create<WishListState & WishListActions>((set) => ({
  wishListIds: [],
  toggleWishlist: (productId) => {
    set((state) => ({
      wishListIds: state.wishListIds.includes(productId)
        ? state.wishListIds.filter((id) => id !== productId)
        : [...state.wishListIds, productId],
    }));
  },
}));
