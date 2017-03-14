import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});


const SignupModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);

export default SignupModalContainer;
