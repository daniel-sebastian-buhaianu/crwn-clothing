import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

function Directory(props) {
  return (
    <DirectoryContainer>
      {props.categories.map((category) => (
        <DirectoryItem key={category.id} directory={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
