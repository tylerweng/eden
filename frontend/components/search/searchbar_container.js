import { connect } from 'react-redux';
import { query } from '../../actions/search_actions';
import { fetchProfileTrack } from '../../actions/track_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ tracks, search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  query: queryValue => dispatch(query(queryValue)),
  fetchProfileTrack: profileTrack => dispatch(fetchProfileTrack(profileTrack))
});


const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
