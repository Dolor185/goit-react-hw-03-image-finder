import React, { Component } from 'react';
import { Container, Form, Input, Button } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/icons8-search.svg';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    inquiry: '',
  };

  handeSubmit = e => {
    e.preventDefault();

    if (this.state.inquiry.trim() === '') {
      toast.error('Empty request! Please fill in the search field. ');
      return;
    }

    this.props.onSubmit(this.state.inquiry);
    this.setState({ inquiry: '' });
  };

  handleChange = e => {
    this.setState({ inquiry: e.currentTarget.value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handeSubmit}>
          <Button type="submit">
            <SearchIcon />
          </Button>

          <Input
            onChange={this.handleChange}
            value={this.state.inquiry}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Container>
    );
  }
}
