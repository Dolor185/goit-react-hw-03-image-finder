import { Button } from './LoadMore.styled';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};
