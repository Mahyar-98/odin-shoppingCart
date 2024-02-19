import "../styles/Shop.css";
import PropTypes from "prop-types";
import Product from "./Product";
import LoadingPage from "./LoadingPage";

const Shop = ({ products, loading, handleAddToCart }) => {
  const productList = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
    />
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
  handleAddToCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
    }),
  ).isRequired,
};

export default Shop;
