import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

function Directory(props) {
  return (
    <div className='directory-container'>
      {props.categories.map((category) => (
        <DirectoryItem key={category.id} directory={category} />
      ))}
    </div>
  );
}

export default Directory;
