import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../products/ProductSlice";

function Navbar() {
  const [totalAmount, setTotalAmoun] = useState("");
  const [count, setCount] = useState(0);
  const products = useSelector(selectProduct);

  useEffect(() => {
    if (products.products) {
      // console.log(products.products[0].currency);

      setTotalAmoun("$" + products.cartTotalAmount);
      setCount(products.cartProducts.length);
    }
  }, [products.cartProducts]);

  const cartClick = () => {
    alert("items");
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-4">Ghyanmitra</div>
      <div className="col-4"></div>
      <div className="col-4 d-flex justify-content-end">
        <div
          className="me-2 d-flex"
          style={{ cursor: "pointer" }}
          onClick={cartClick}
        >
          <div>
            <div className="font-weight-bold" style={{ fontSize: "x-large" }}>
              {"" + totalAmount}
            </div>
            <div className="d-flex">
              <div>{count} Items</div>
              <i className="ms-2 fas fa-sort-down"></i>
            </div>
          </div>

          <div className="align-self-center">
            <i className="fas fa-shopping-cart" style={{ fontSize: "2em" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
