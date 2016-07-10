import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MovieList extends Component {

  componentWillMount() {
    // Do what you want to do when the component mounts
    if (this.props.movieList[0].Search) {
      this.renderMovieList = function() {
        const movieArray = this.props.movieList[0].Search;
        if (movieArray) {
          return movieArray.map(movieItem => {

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
                    </div>
                  </div>
                </div>
              </div>
            );

          });
        }
      }
    } else {
      this.context.router.push('/');
      console.log('No data arrived');
    }
  }

  renderPagination() {
    const totalPage = this.props.movieList[0].totalResults;
    const pageNum = Math.floor(totalPage / 10);
    const pageArr = [];
    for (var i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    return pageArr.map(page => {
      return (
        <a key={page} href="#"> {page} </a>
      );
    });
  }

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <Link to="/" className="btn btn-default">Back to search</Link>
        <div>Search results for: Name of the movie</div>
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

export default connect(mapStateToProps)(MovieList);
