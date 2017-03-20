import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
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
