import React from "react";

const Product = (state) => {
  const { currency, desc, id, image, price, title } = state.product;

  return (
    <div className="card mt-3">
      {/* <img src={product.image} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        <div className="d-flex">
          <div className="btn btn-primary">-</div>
          <input style={{ width: "30px", hight: "100%" }} />
          <div className="btn btn-primary">+</div>
          <div className="ms-10">{currency + price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
