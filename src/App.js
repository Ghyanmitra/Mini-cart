import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchProducts, selectProduct } from "./features/products/ProductSlice";

function App() {
  const dispatch = useDispatch();
  const { products, hasError, loading } = useSelector(selectProduct);

  console.log(products);

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
      return <div key={product.id}>{product.title}</div>;
    });
  };

  return <div>{renderProducts()}</div>;
}

export default App;
