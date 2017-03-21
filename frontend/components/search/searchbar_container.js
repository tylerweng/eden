import { connect } from 'react-redux';
import { query } from '../../actions/search_actions';
import { resetErrors } from '../../actions/error_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ tracks, search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  query: queryValue => dispatch(query(queryValue))
});


const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
