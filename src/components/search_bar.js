import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { search: '', typeError: false };
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
    const searchValue = this.state.search;
    const pageNum = 1;
    if (searchValue !== '' && searchValue.length >= 3) {
      this.props.fetchMovie(searchValue, pageNum)
        .then((response) => {
          this.context.router.push('/movie-list/' + searchValue + '/' + pageNum);
        });
    } else {
      this.setState({typeError: true});
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
            <p className={this.state.typeError ? 'visible' : 'hidden'}>Pls do not left the field blank or write chars less than 3</p>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
