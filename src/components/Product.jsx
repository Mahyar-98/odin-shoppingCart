import "../styles/Product.css";
import PropTypes from "prop-types";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
      <div className="image-container">
        <img src={product.image} alt={product.description} />
      </div>
      <div className="product-product">
        <div className="product-title">
          <p>{product.title}</p>
        </div>
        <p>
          {product.rating.rate} ({product.rating.count})
        </p>
        <p>${product.price}</p>
        <div className="product-buy">
          <div className="count-input">
            <button
              className="count-change"
              onClick={() => handleAddToCart(product.id, product.cart - 1)}
            >
              -
            </button>
            <input
              type="number"
              value={product.cart}
              onChange={(e) => handleAddToCart(product.id, e.target.value)}
            />
            <button
              className="count-change"
              onClick={() => handleAddToCart(product.id, product.cart + 1)}
            >
              +
            </button>
          </div>
          <button onClick={() => handleAddToCart(product.id, product.cart + 1)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    cart: PropTypes.number.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Product;
