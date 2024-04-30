import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

function DirectoryItem({ directory }) {
  const { title, imageUrl } = directory;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
