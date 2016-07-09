import React, { Component } from 'react';

export default class SearchBar extends Component {

  // Renders the component
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-md-offset-3">
          <div className="input-group">
              <input onChange={this.props.changeState} type="text" className="form-control" placeholder="Search for a movie..." value={this.props.value}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Search</button>
              </span>
          </div>
        </div>
      </div>
    );
  }
}
