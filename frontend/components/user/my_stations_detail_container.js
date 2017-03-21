import { connect } from 'react-redux';
import MyStationsDetail from './my_stations_detail';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

const MyStationsDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyStationsDetail);

export default MyStationsDetailContainer;
