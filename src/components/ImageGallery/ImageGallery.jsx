import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

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
