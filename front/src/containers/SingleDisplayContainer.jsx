import {connect} from "react-redux"
import SingleDisplayComponent from '../components/SingleDisplay';

const mapStateToProps = (state) => {
  return {
      selectedDisplay: state.moviesAndShows.selectedDisplay
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

  const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(SingleDisplayComponent)
  export default DisplayContainer;