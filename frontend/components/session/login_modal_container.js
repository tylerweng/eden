import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import LoginModal from './login_modal';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  resetErrors: () => dispatch(resetErrors())
});


const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default LoginModalContainer;