import { Component } from 'react';
import { Container, Form, Input, Button } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/icons8-search.svg';

export class Searchbar extends Component {
  state = {
    inquiry: '',
  };

  handeSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inquiry);
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
