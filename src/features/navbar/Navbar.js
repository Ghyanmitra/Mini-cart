import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectProduct } from "../products/ProductSlice";

function Navbar() {
  const products = useSelector(selectProduct);

  const [totalAmount, setTotalAmoun] = useState("");
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCart] = useState([]);

  useEffect(() => {
    if (products.products) {
      // console.log(products.products[0].currency);

      const data = products.cartProducts.reduce((acc, curr) => {
        if (acc[curr.id]) {
          acc[curr.id].count += 1;
        } else {
          acc[curr.id] = { ...curr, count: 1 };
        }

        return acc;
      }, {});

      const cartItemData = Object.values(data);
      setCart(cartItemData);

      setTotalAmoun("$" + products.cartTotalAmount);
      setCount(products.cartProducts.length);
    }
  }, [products.cartProducts]);

  const cartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
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
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: "2em" }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {showCart ? (
        <div
          className="position-relative "
          style={{
            zIndex: 1,
          }}
        >
          <div className="card position-absolute top-0 end-0">
            {cartItems.length != 0 ? (
              cartItems.map((value, key) => {
                return <CartItem key={key} product={value} />;
              })
            ) : (
              <div className="alert-success">
                Your cart has 0 product.<br></br> Please add product.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Navbar;
