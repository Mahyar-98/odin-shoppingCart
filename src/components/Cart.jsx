import PropTypes from "prop-types";
import '../styles/Cart.css'

const Cart = ({ products }) => {
    const itemList = products.map(item => {
        return (<div className="cart-item" key={item.id}>{item.title}: {item.cart}</div>)
    })
    
    return (<>{itemList}</>)
};

Cart.propTypes = {
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

export default Cart;
