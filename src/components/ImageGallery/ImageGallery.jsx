import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, handleModal }) => (
  <List>
    {images.map(({ id, webformatURL }, index) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        index={index}
        handleModal={handleModal}
      />
    ))}
  </List>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleModal: PropTypes.func.isRequired,
};
