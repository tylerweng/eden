import { connect } from 'react-redux';
import { query } from '../../actions/search_actions';
import { resetErrors } from '../../actions/error_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ search, errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  resetErrors: () => dispatch(resetErrors())
});


const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
