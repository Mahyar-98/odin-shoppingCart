import '../styles/CartItem.css'
import { FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types'

const CartItem = ({ item, handleAddToCart}) => {
    return (
    <div className="cart-item">
        <img className='item-img' src={item.image} alt={item.description} />
        <strong className='item-title'>{item.title}</strong>
        <div className='item-quantity'>
            <p>Quantity: {item.cart}</p>
            <div className='cart-item-btns'>
                <button onClick={()=>handleAddToCart(item.id, item.cart+1)}>+</button>
                <button onClick={()=>handleAddToCart(item.id, item.cart-1)}>-</button>
            </div>
            </div>
        <p className='item-price'>${(item.price * item.cart).toFixed(2)}</p>
        <button className='item-trash' onClick={()=>handleAddToCart(item.id, 0)}><FaTrash /></button>
    </div>)
}

CartItem.propTypes = {
    item: PropTypes.shape({
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

export default CartItem