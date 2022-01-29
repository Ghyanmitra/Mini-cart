import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/products/ProductSlice";
export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
