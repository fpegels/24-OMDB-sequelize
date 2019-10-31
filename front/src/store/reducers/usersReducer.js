import { CHECK_USER, ADD_FAVE, LOG_USER, REGISTER_USER, LOG_OUT, DELETE_FAVE, GET_USERS } from '../constants';

const initialState = {
  authenticated:false,
  user: {}, 
  listOfFaves: [],
  loginTried: false,
  regTried: false,
  userList: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHECK_USER:
      if(action.pack.user){
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: action.pack.listOfFaves });
      }else{
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: [] });
      }
    case LOG_USER:
      if(action.pack.user.username){
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: action.pack.listOfFaves, loginTried: false, regTried:false });
      }else{
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: [], loginTried: true,regTried:false });
      }
    case REGISTER_USER:
      if(action.pack.user.username){
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: [],loginTried: false, regTried: false });
      }else{
        return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: [], loginTried: false, regTried:true });
      }
    case ADD_FAVE:
      return Object.assign({}, state, { listOfFaves: action.listOfFaves });
    case DELETE_FAVE:
      return Object.assign({}, state, { listOfFaves: action.listOfFaves });
    case LOG_OUT:
      return Object.assign({}, state, { authenticated: action.pack.authenticated, user: action.pack.user, listOfFaves: [] });
    case GET_USERS:
      return Object.assign({}, state, { userList: action.userlist });
    default:
      return state;
  }
}