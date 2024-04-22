import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
}

export default CartIcon;
