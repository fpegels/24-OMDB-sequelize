import axios from 'axios';
import { GET_MOVIES, GET_SHOWS, GET_ALL, GET_ONE, GET_FAVES, GET_USER_FAVES} from '../constants';

const receiveMovies = (display) => ({
  type: GET_MOVIES,
  display,
});

const receiveShows= (display) => ({
  type: GET_SHOWS,
  display,
});

const receiveALL = (display) => ({
  type: GET_ALL,
  display,
})

const receiveOne = (selectedDisplay) => ({
  type: GET_ONE,
  selectedDisplay
})

const receiveFaves = (display) => ({
  type: GET_FAVES,
  display
})

const getUserFaves = (display) => ({
  type: GET_USER_FAVES,
  display
})

export const fetchUserFaves = (user) => dispatch =>  {
  axios.get(`/favourites/${user}/`)
  .then(data => dispatch(getUserFaves(data.data)))
} 

export const fetchFaves = () => dispatch =>{
      axios.get('/favourites')
      .then(data => dispatch(receiveFaves(data.data)))
}

export const fetchMovies = (title) => dispatch =>
  axios.get('http://www.omdbapi.com/?type=movie&s=' + title + '&apikey=7a3b271d')
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies.Search)))

export const fetchShows = (title) => dispatch =>
  axios.get('http://www.omdbapi.com/?type=series&s=' + title + '&apikey=7a3b271d')
    .then(res => res.data)
    .then(shows => dispatch(receiveShows(shows.Search)))

export const fetchAll = (title) => dispatch =>
  axios.get('http://www.omdbapi.com/?s=' + title + '&apikey=7a3b271d')
    .then(res => res.data)
    .then(all => dispatch(receiveALL(all.Search)))

export const fetchOne = (id) => dispatch =>
  axios.get('http://www.omdbapi.com/?i=' + id + '&apikey=7a3b271d')
    .then(res => res.data)
    .then(match => dispatch(receiveOne(match)));