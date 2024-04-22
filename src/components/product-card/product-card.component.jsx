import { useContext } from 'react';
import Button from '../button/button.component';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={'inverted'} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
  function addProductToCart() {
    addItemToCart(product);
  }
}

export default ProductCard;
