import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import favoritesReducer from './features/favorites/favoritesSlice';
import searchReducer from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    search: searchReducer,
  },
})