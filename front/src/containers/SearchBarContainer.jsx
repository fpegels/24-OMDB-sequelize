import {connect} from "react-redux";
import SearchBarComponent from '../components/SearchBar';


import {fetchMovies, fetchShows, fetchAll, fetchFaves} from '../store/actions/moviesAndShows'
import {loginUser, regisUser, userLogOut} from '../store/actions/users'


const mapStateToProps = (state) => {
  return {
    authenticated: state.users.authenticated,
    user: state.users.user,
    listOfFaves: state.users.listOfFaves,
    loginTried: state.users.loginTried,
    regTried: state.users.regTried
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (range, search)=>{
      switch(range){
          case "movies":
              dispatch(fetchMovies(search));
              break;
          case "shows":
              dispatch(fetchShows(search));
              break;
          case "both":
              dispatch(fetchAll(search));
              break;
      }
    },
    handleFaves : () =>{
      dispatch(fetchFaves())
    },
    handleLogin : (username, password) =>{
      dispatch(loginUser(username, password))
    },
    handleReg : (username, password) =>{
      dispatch(regisUser(username, password))
    },
    handleLogOut: () =>{
      dispatch(userLogOut())
    }
  };
}

  const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent)
  export default SearchBarContainer;