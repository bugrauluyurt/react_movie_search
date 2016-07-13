'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
// import SearchBar from './search_bar';

export default class App extends Component {
  
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
              <Link to="/" className="navbar-brand" href="#">Movie-Search-App (React-Redux)</Link>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
