import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MovieList from './components/movie_list';

import App from './components/app';
import SearchBar from './components/search_bar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchBar} />
    <Route path="/movie-list/:movieName/:pageNum" component={MovieList} />
  </Route>
)
