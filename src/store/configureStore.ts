/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const configureAppStore = () => {
  return configureStore({
    reducer: {},
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production',
  });
};
