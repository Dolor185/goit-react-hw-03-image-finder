import { Component } from 'react';

import { BackDrop, Box } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    e.code === 'Escape' && this.props.onClose();
  };

  onBackdropClick = e => {
    e.target === e.currentTarget && this.props.onClose();
  };

  render() {
    const { modalImg } = this.props;
    console.log(modalImg);
    return (
      <BackDrop onClick={this.onBackdropClick}>
        <Box>
          <img src={modalImg} alt="" />
        </Box>
      </BackDrop>
    );
  }
}
