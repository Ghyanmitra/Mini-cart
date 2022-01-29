import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasError: false,
  products: [],
};

const productsSlcies = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.products = payload;
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const { getProducts, getProductSuccess, getProductFailure } =
  productsSlcies.actions;

//A selctor
export const selectProduct = (state) => state.products;

//the reducer
export default productsSlcies.reducer;

//Async thunk action
export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts);

    try {
      const response = await fetch(
        "https://dnc0cmt2n557n.cloudfront.net/products.json"
      );
      const data = await response.json();

      dispatch(getProductSuccess(data.products));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
}
