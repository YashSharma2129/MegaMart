import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice';
import settingsReducer from './slices/settingsSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    auth: authReducer,
    settings: settingsReducer,
    theme: themeReducer,
  },
});
