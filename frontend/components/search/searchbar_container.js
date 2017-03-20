import { connect } from 'react-redux';
import { selectPlayPauseTrack } from '../../actions/track_actions';
import { query } from '../../actions/search_actions';
import { resetErrors } from '../../actions/error_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ search }) => ({
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
