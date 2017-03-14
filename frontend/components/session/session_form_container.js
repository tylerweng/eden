import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const path = location.pathname.slice();
  const formHeader = (path.includes('session') ? 'Log In' : 'Sign Up');
  const processForm = (formHeader === 'Log In' ? login : signup );

  return {
    processForm: user => dispatch(processForm(user)),
    formHeader
  };
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionFormContainer;
