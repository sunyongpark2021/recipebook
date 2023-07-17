import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favorites"; //favoriteReducer is default from favorites

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
