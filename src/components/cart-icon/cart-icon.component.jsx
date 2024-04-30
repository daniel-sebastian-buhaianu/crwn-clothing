import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icon.styles.jsx';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
}

export default CartIcon;
