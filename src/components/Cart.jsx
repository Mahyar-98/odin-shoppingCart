import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = ({ products, handleAddToCart, handleCheckout }) => {
  const itemList = products.map((item) => {
    if (item.cart > 0) {
      return (
        <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} />
      );
    }
  });

  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.cart,
    0,
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {itemList.every((item) => item === undefined) ? (
        <div className="cart-empty">
          <h2>Your cart is empty!</h2>
          <p>Please add items to your cart.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">{itemList}</div>
          <div className="cart-total">
            <strong>Your Totoal:</strong>
            <strong>${totalPrice.toFixed(2)}</strong>
            <Link to="/thanks">
              <button onClick={() => handleCheckout()}>Checkout</button>
            </Link>
          </div>
        </>
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
  handleCheckout: PropTypes.func.isRequired,
};

export default Cart;
