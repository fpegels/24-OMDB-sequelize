import {connect} from "react-redux"
import UsersComponent from '../components/Users';
import {fetchUserFaves} from '../store/actions/moviesAndShows'


const mapStateToProps = (state) => {
  return {
      userList: state.users.userList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOtherFaves: (user) => {
      dispatch(fetchUserFaves(user))
    }
  }
}

  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
  export default UsersContainer;