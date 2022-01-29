import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../products/Product";
import { fetchProducts, selectProduct } from "../products/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, hasError, loading } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    if (loading) {
      return <p>Products Loading...</p>;
    }

    if (hasError) {
      return <p>Products not found</p>;
    }

    return products.map((product) => {
      console.log(product);
      return <Product key={product.id} product={product}></Product>;
    });
  };

  return <div>{renderProducts()}</div>;
};

export default Home;
