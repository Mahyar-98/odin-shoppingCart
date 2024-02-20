import PropTypes from "prop-types";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = ({ products, handleAddToCart }) => {
  const itemList = products.map((item) => {
    if (item.cart > 0) {
      return (
        <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} />
      );
    }
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      {itemList.every((item) => item === undefined) ? (
        <div className="cart-empty">
          <h2>Your cart is empty!</h2>
          <p>Please add items to your cart.</p>
        </div>
      ) : (
        <div className="cart-items">{itemList}</div>
      )}
    </div>
  );
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
    }),
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Cart;
