'use strict';

import { combineReducers } from 'redux';
import movieReducer from './reducer_movie_list';

const rootReducer = combineReducers({
  movieList: movieReducer
});

export default rootReducer;
