import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import getImages from 'components/API/Api';
import { LoadMore } from '../LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    status: 'idle',
    inquiry: '',
    page: 1,
    images: [],
    showModal: false,
    modalImg: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const oldInquiry = prevState.inquiry;
    const oldPage = prevState.page;
    const { inquiry, page } = this.state;

    if (oldInquiry !== inquiry || oldPage !== page) {
      this.setState({ status: 'pending' });
      const response = getImages(inquiry, page);
      setTimeout(() => {
        response.then(res => {
          if (res.data.hits.length === 0) {
            toast.error('Nothing was found');
          }
          this.setState(({ images }) => ({
            images: [...images, ...res.data.hits],
          }));
          this.setState({ status: 'resolved' });
        });
      }, 1000);
    }
  }

  onLoadMore = e => {
    e.preventDefault();
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  formSubmit = message => {
    this.setState({ inquiry: message, images: [], page: 1 });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleModal = index => {
    this.setState(({ images }) => ({
      showModal: true,
      modalImg: images[index].largeImageURL,
    }));
  };

  render() {
    const { status, images, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <div>
            <ImageGallery
              images={this.state.images}
              handleModal={this.handleModal}
            />
            {images.length !== 0 && <LoadMore onLoadMore={this.onLoadMore} />}
          </div>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} modalImg={this.state.modalImg} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
