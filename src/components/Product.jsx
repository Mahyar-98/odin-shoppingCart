import '../styles/Product.css'
import PropTypes from "prop-types";

const Product = ({ info }) => {
  return (
    <div className="product">
      <div className="image-container">
      <img src={info.image} alt={info.description} />
      </div>
      <div className="product-info">
        <div className="product-title">
          <p>{info.title}</p>
        </div>
      <p>
        {info.rating.rate} ({info.rating.count})
      </p>
      <p>${info.price}</p>
      <div className="product-buy">
        <div className="count-input">
          <button className="count-change">-</button>
        <input type="number" />
        <button className="count-change">+</button>
        </div>
        <button>Add to cart</button>
      </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
