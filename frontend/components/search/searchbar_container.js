import { connect } from 'react-redux';
import { query } from '../../actions/search_actions';
import { fetchProfileTrack, selectTrack } from '../../actions/track_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ tracks, search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  query: queryValue => dispatch(query(queryValue)),
  fetchProfileTrack: id => dispatch(fetchProfileTrack(id)),
  selectTrack: selectedTrack => dispatch(selectTrack(selectedTrack))
});


const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
