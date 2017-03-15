import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserDropdown from './user_dropdown';

const mapStateToProps = state => ({
  userId: (state.session.currentUser ? state.session.currentUser.id : 0)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const UserDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropdown);

export default UserDropdownContainer;
