'use strict';

import React, { Component } from 'react';
import SearchBar from './search_bar';

export default class App extends Component {

  // Constuctor function
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  // Changes the state
  changeState(event) {
    this.setState({ term: event.target.value });
  }

  // Renders the component
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Movie-Search-App (React-Redux)</a>
            </div>
          </div>
        </nav>
        <SearchBar changeState={ this.changeState.bind(this) } value={ this.state.term }/>
      </div>

    );
  }
}
