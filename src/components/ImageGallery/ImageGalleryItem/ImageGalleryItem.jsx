import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, index }) => {
  return (
    <Item>
      <Image src={webformatURL} alt="" />
    </Item>
  );
};
