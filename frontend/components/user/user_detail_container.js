import { connect } from 'react-redux';
import UserDetail from './user_detail';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

const UserDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;
