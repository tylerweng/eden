import { connect } from 'react-redux';
import { signup, resetErrors } from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  resetErrors: () => dispatch(resetErrors())
});


const SignupModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);

export default SignupModalContainer;
