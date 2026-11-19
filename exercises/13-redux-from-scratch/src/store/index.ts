import type { TypedUseSelectorHook } from 'react-redux';
import type { store } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from './cartSlice';
import { wishListSlice } from './wishListSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { StoreProvider } from './provider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const cartActions = cartSlice.actions;
export const wishListActions = wishListSlice.actions;
