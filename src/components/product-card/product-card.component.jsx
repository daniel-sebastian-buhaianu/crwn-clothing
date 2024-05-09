import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './product-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );

  function addProductToCart() {
    dispatch(addItemToCart(cartItems, product));
  }
}

export default ProductCard;
