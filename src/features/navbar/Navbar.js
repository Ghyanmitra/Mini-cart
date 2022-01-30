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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div to="/" className="navbar-brand">
            Ghyanmitra Jiblapnor
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li> */}
          </ul>
          <div className="d-flex">
            <div style={{ fontSize: "x-large" }}>
              {" "}
              {"" + totalAmount}
              <div style={{ fontSize: "large" }}>
                {count} items
                <div>
                  <i className="fas fa-sort-down"></i>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
