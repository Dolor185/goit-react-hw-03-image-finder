import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, index, handleModal }) => {
  return (
    <Item>
      <Image src={webformatURL} alt="" onClick={e => handleModal(index)} />
    </Item>
  );
};
