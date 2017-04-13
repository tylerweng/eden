import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import LoginModal from './login_modal';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  resetErrors: () => dispatch(resetErrors())
});


const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default LoginModalContainer;
