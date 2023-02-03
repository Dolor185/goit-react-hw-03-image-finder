import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import getImages from 'components/API/Api';

export class App extends Component {
  state = {
    status: 'idle',
    inquiry: '',
    page: 1,
    images: [],
  };
  componentDidUpdate(prevProps, prevState) {
    const oldInquiry = prevState.inquiry;
    const { inquiry, page } = this.state;
    console.log(inquiry);

    if (oldInquiry !== inquiry) {
      this.setState({ status: 'pending' });
      const response = getImages(inquiry, page);
      response.then(res => {
        if (res.data.hits.length === 0) {
          toast.error('Nothing was found');
        }
        this.setState(({ images }) => ({
          images: [...images, ...res.data.hits],
        }));
        this.setState({ status: 'response' });
      });
    }
  }

  formSubmit = message => {
    this.setState({ inquiry: message });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        {this.state.status === 'response' && (
          <ImageGallery images={this.state.images} />
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
