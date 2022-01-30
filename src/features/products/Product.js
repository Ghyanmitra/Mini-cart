import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  addProductToCart,
  removeProductFromCart,
} from "./ProductSlice";

import logo from "../../images/logo512.png";

const Product = (state) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const { currency, desc, id, image, price, title } = state.product;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let newQuantity = 0;

    if (products.cartProducts) {
      products.cartProducts.map((product, key) => {
        if (id === product.id) {
          newQuantity = newQuantity + 1;
        }
      });
    }

    setQuantity(newQuantity);
  }, [dispatch, products.cartProducts]);

  return (
    <div className="card mt-3 w-75">
      <div className="card-body d-flex">
        {/* <img
          src={logo}
          style={{ height: "100px", width: "100px" }}
          alt={title}
        /> */}
        <h5 className="card-title">{title}</h5>
        <p className="card-text ms-5">{desc}</p>
        <div className="d-flex ms-5">
          <div
            onClick={() => dispatch(removeProductFromCart(state.product))}
            className="btn btn-primary"
          >
            -
          </div>
          <input
            value={quantity}
            style={{ width: "30px", textAlign: "center" }}
            disabled
          />
          <div
            onClick={() => dispatch(addProductToCart(state.product))}
            className="btn btn-primary"
          >
            +
          </div>
          <div style={{ fontSize: "x-large" }}>{currency + price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
