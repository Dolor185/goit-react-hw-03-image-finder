import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    inquiry: '',
  };

  formSubmit = message => {
    this.setState({ inquiry: message });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
      </div>
    );
  }
}
