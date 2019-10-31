import axios from 'axios';
import { CHECK_USER, ADD_FAVE, DELETE_FAVE, LOG_USER, REGISTER_USER, LOG_OUT, GET_USERS} from '../constants';


const receiveConfirmation = (pack) => ({
  type: CHECK_USER,
  pack,
});

const sendFave = (listOfFaves) => ({
  type: ADD_FAVE,
  listOfFaves,
});

const deleteFave = (listOfFaves) => ({
  type: DELETE_FAVE,
  listOfFaves,
})

const logUser = (pack) =>({
  type: LOG_USER,
  pack
})

const regUser = (pack) =>({
  type: REGISTER_USER,
  pack
})

const logOut = (pack) => ({
  type: LOG_OUT,
  pack
})

const getUsers = (userlist) => ({
  type: GET_USERS,
  userlist
})

export const fetchUsers = () => dispatch => {
  axios.get('http://localhost:1337/users')
  .then(data => {
    dispatch(getUsers(data.data))})
}
export const userLogOut = () => dispatch => {
  axios.get('http://localhost:1337/logout')
  .then(res => {
    dispatch(logOut({authenticated:false, user: {}}))
  }).catch(error => console.log(error))
}

export const loginUser = (username, password) => dispatch =>{
  axios.post('http://localhost:1337/login', {
    username,
    password}
    ).then(res => {
      dispatch(logUser({
        authenticated: res.data.success,
        user: res.data.user,
        listOfFaves: res.data.listOfFaves
      }));
    })
    .catch(error => {
      dispatch(logUser({
        authenticated: false,
        user: { favorites: []}
      }));
    })
}

export const regisUser = (username, password) => dispatch =>{
    axios.post('http://localhost:1337/register', {
      username,
      password})
    .then(res => {
      dispatch(regUser({
        authenticated: res.data.success,
        user: res.data.user,
        listOfFaves: res.data.listOfFaves
      }));
    })
    .catch(error => {
      dispatch(regUser({
        authenticated: false,
        user: { favorites: []}
      }));
    })
}



export const checkUser = () => dispatch =>{
    axios.get("http://localhost:1337/login/auth")
      .then(res => {
        dispatch(receiveConfirmation({
          authenticated: res.data.success,
          user: res.data.user,
          listOfFaves: res.data.listOfFaves
        }));
      })
      .catch(error => {
        dispatch(receiveConfirmation({
          authenticated: false,
          user: { favorites: []}
        }));
})}

export const addFave = (poster, imdbID) => dispatch =>{
  axios.post('http://localhost:1337/favourites/add/', {poster, imdbID} )
  .then(data => {
    dispatch(sendFave(data.data.map(object => object.imdbID)))
  })
  .catch(err => console.log(err))
}

export const delFave = (imdbID) => dispatch =>{
  axios.delete(`http://localhost:1337/favourites/delete/${imdbID}`)
  .then(data => dispatch(deleteFave(data.data.map(object => object.imdbID))));
}