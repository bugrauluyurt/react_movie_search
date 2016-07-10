import axios from 'axios';

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';

const ROOT_URL = 'http://www.omdbapi.com/';

export function fetchMovie(search, page = 1) {
  const request = axios.get(`${ROOT_URL}?s=${search}&page=${page}&y=&plot=short&r=json`);

  return {
    type: FETCH_MOVIE_LIST,
    payload: request
  };
}
