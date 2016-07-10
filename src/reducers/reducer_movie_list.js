import { FETCH_MOVIE_LIST } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_MOVIE_LIST:
    return [action.payload.data];
  }
  return state;
}
