import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SignupModal from './signup_modal';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
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
