import PropTypes from 'prop-types'

const Product = ({ info }) => {
  return (
    <div className="product">
      <img src={info.image} alt={info.description} />
      <p>{info.title}</p>
      <p>{info.rating.rate} ({info.rating.count})</p>
      <p>{info.price}</p>
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
        count: PropTypes.number.isRequired
      }).isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  };
  
export default Product;
