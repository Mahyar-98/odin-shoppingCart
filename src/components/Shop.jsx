import "../styles/Shop.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import LoadingPage from "./LoadingPage";

const Shop = ({ products, handleProductsChange }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const initialProducts = json.map(item => ({
          ...item,
          cart: 0
        }))
        handleProductsChange(initialProducts)
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [ handleProductsChange ]);

  const productList = products.map((product) => (
    <Product key={product.id} info={product} />
  ));

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <h2 className="shop-heading">Our Products</h2>
          <div className="shop-items">{productList}</div>
        </>
      )}
    </>
  );
};

Shop.propTypes = {
  handleProductsChange: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
      price: PropTypes.number.isRequired,
      cart: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Shop;
