import { createSlice, current } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasError: false,
  products: [],
  cartProducts: getLocalStorageCartProducts(),
  cartTotalAmount: getCartTotalAmount(),
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
      // state.cartProducts = getLocalStorageCartProducts();
      // state.cartTotalAmount = getCartTotalAmount();
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    addProductToCart: (state, { payload }) => {
      state.cartProducts = [...state.cartProducts, payload];

      let totalAmount = 0;

      state.cartProducts.map((product) => {
        totalAmount += parseInt(product.price);
      });

      state.cartTotalAmount = totalAmount;
      setLocalStorageCartProducts(state.cartProducts);
    },
    removeProductFromCart: (state, { payload }) => {
      const cartProduct = getLocalStorageCartProducts();
      let removeID = null;

      for (let index = 0; index < cartProduct.length; index++) {
        // const element = array[index];
        if (cartProduct[index].id === payload.id) {
          removeID = index;
          state.cartTotalAmount =
            state.cartTotalAmount - cartProduct[index].price;
          break;
        }
      }

      if (removeID != null) {
        cartProduct.splice(removeID, 1);

        state.cartProducts = cartProduct;
        setLocalStorageCartProducts(state.cartProducts);
      }
    },
  },
});

export const {
  getProducts,
  getProductSuccess,
  getProductFailure,
  addProductToCart,
  removeProductFromCart,
} = productsSlcies.actions;

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

function getLocalStorageCartProducts() {
  const localProducts = localStorage.getItem("products");

  if (localProducts) {
    return JSON.parse(localProducts);
  } else {
    return [];
  }
}

function setLocalStorageCartProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function getCartTotalAmount() {
  const localProducts = localStorage.getItem("products");
  let totalAmount = 0;
  if (localProducts) {
    JSON.parse(localProducts).map((product) => {
      totalAmount += parseInt(product.price);
    });
  }
  return totalAmount;
}
