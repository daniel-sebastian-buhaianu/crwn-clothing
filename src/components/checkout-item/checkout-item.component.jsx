import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
  function addItemToCartHandler() {
    addItemToCart(cartItem);
  }
  function removeItemFromCartHandler() {
    removeItemFromCart(cartItem);
  }
  function clearItemFromCartHandler() {
    clearItemFromCart(cartItem);
  }
}

export default CheckoutItem;
