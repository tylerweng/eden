import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserDropdown from './user_dropdown';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const UserDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropdown);

export default UserDropdownContainer;
