import { GET_MOVIES, GET_SHOWS, GET_ALL, GET_ONE, GET_FAVES, GET_USER_FAVES} from '../constants';

const initialState = {
  display:[],
  selectedDisplay: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, { display: action.display });
    case GET_SHOWS:
      return Object.assign({}, state, { display: action.display });
    case GET_ALL:
      return Object.assign({}, state, { display: action.display });
    case GET_ONE:
      return Object.assign({}, state, { selectedDisplay: action.selectedDisplay });
    case GET_FAVES:
      return Object.assign({}, state, { display: action.display });
    case GET_USER_FAVES:
      return Object.assign({}, state, { display: action.display });
    default:
      return state;
  }
}