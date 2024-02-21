import "../styles/Product.css";
import PropTypes from "prop-types";

const Product = ({ product, handleAddToCart }) => {
  const getStars = (rating) => {
    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push(
        <>
          <i className="fa fa-star" aria-hidden="true"></i>&nbsp;
        </>,
      );

    // If there is a half a star, append it
    if (i == 0.5)
      output.push(
        <>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>&nbsp;
        </>,
      );

    // Fill the empty stars
    for (let i = 5 - rating; i >= 1; i--)
      output.push(
        <>
          <i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;
        </>,
      );

    return output;
  };

  return (
    <div className="product">
      <div className="image-container">
        <img src={product.image} alt={product.description} />
      </div>
      <div className="product-info">
        <div className="product-title">
          <p>{product.title}</p>
        </div>
        <span>
          Rating: {getStars(product.rating.rate)}
          <span>({product.rating.count})</span>
        </span>
        <p className="product-price">
          Price: <b>${product.price.toFixed(2)}</b>
        </p>
        <div className="product-buy">
          {product.cart === 0 ? (
            <>
              <div className="product-buy-item"></div>
              <button
                className="add-button product-buy-item"
                onClick={() => handleAddToCart(product.id, product.cart + 1)}
              >
                Add to cart
              </button>
            </>
          ) : (
            <>
              <div className="count-input product-buy-item">
                <button
                  className="count-change"
                  onClick={() => handleAddToCart(product.id, product.cart - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={product.cart}
                  onChange={(e) =>
                    handleAddToCart(product.id, parseInt(e.target.value))
                  }
                />
                <button
                  className="count-change"
                  onClick={() => handleAddToCart(product.id, product.cart + 1)}
                >
                  +
                </button>
              </div>
              <div className="product-buy-item">
                <p className="confirm-added">Added ✓</p>
              </div>
            </>
          )}
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
