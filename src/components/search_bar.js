import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    // Do what you want to do when the component mounts
  }

  onInputChange(event) {
    this.setState({search: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    if (this.state.search !== '') {
      this.props.fetchMovie(this.state.search)
        .then((response) => {
          console.log(response);
          this.context.router.push('/movie-list');
        });
    }
  }

  // Renders the component
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-md-offset-3">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-group">
                  <input onChange={this.onInputChange.bind(this)} name="searchInput" type="text" className="form-control" placeholder="Search for a movie..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Search</button>
                  </span>
              </div>
            </form>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
