import {connect} from "react-redux"
import DisplayComponent from '../components/Display';
import { addFave, delFave } from '../store/actions/users';


const mapStateToProps = (state) => {
  return {
      display: state.moviesAndShows.display,
      authenticated : state.users.authenticated,
      listOfFaves: state.users.listOfFaves
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFave: (poster, id) =>{
      dispatch(addFave(poster, id))
    },
    deleteFave: (imdbDB) =>{
      dispatch(delFave(imdbDB))
    }
  }
}

  const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayComponent)
  export default DisplayContainer;