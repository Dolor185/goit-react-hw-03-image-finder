import { Button } from './LoadMore.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
