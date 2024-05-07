import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

function DirectoryItem({ directory }) {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );

  function onNavigateHandler() {
    navigate(route);
  }
}

export default DirectoryItem;
