import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

class MovieList extends Component {

  renderMovieList() {
    const movieArray = this.props.movieList[0].Search;

    return movieArray.map(movieItem => {
      if (movieItem.Poster === 'N/A') {
        movieItem.Poster = 'http://placehold.it/100x150';
      }
      return (
        <div key={movieItem.imdbID} className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <a href="#" className="panel-title">{movieItem.Title}</a>
            </div>
            <div className="panel-body">
              <div className="col-xs-3">
                <img className="poster-image" src={movieItem.Poster}/>
              </div>
              <div className="col-xs-9">
                <p><b>Type:</b> {movieItem.Type}</p>
                <p><b>Year:</b> {movieItem.Year}</p>
                <p><b>imdbID:</b> {movieItem.imdbID}</p>
                <p><b>Desc:</b> Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderPagination() {
    const totalPage = this.props.movieList[0].totalResults;
    const pageNum = totalPage / 10;
    const pageArr = [];
    for (var i = 1; i < pageNum + 1; i++) {
      pageArr.push(i);
    }

    return pageArr.map(page => {
      return (
        <a key={page} to=""> {page} </a>
      );
    });
  }

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    if (!this.props.movieList[0].Search) {
      return (
        <div>
          <p>There is no such movie</p>
          <Link to="/" className="btn btn-default">Back to search</Link>
        </div>
      )
    }
    return (
      <div>
        <Link to="/" className="btn btn-default">Back to search</Link>
        <div>Search results for: {this.props.params.movieName}</div>
        <hr/>
        <div>
          Pages: {this.renderPagination()}
        </div>
        <hr/>
        <div>
          {this.renderMovieList()}
        </div>
      </div>
    );
  }
};

function mapStateToProps({ movieList }) {
  return { movieList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
