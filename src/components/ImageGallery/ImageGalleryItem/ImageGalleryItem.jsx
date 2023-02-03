import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, index, handleModal }) => {
  return (
    <Item>
      <Image src={webformatURL} alt="" onClick={e => handleModal(index)} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleModal: PropTypes.func.isRequired,
};
