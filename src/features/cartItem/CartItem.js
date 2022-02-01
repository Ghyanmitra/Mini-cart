import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCartById } from "../products/ProductSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="alert-success">
        <div className="row">
          <div className="col-2 align-self-center">
            <button
              type="button"
              className="btn-sm btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                dispatch(removeProductFromCartById(product));
              }}
            ></button>
          </div>
          <div className="col-6 align-self-center">
            <div>{product.title}</div>
            <div className=" fw-bold">
              {product.currency + "" + product.price}
            </div>
          </div>
          <div className="col-4 align-self-center">
            Qty {" " + product.count}
          </div>
        </div>
      </div>

      <div className="border-top"></div>
    </>
  );
};

export default CartItem;
