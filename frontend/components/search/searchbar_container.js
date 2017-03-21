import { connect } from 'react-redux';
import { query } from '../../actions/search_actions';
import { selectTrack } from '../../actions/track_actions';
import Searchbar from './searchbar';

const mapStateToProps = ({ tracks, search }) => ({
  selectedTrack: tracks.selectedTrack,
  search
});

const mapDispatchToProps = dispatch => ({
  query: queryValue => dispatch(query(queryValue)),
  selectTrack: selectedTrack => dispatch(selectTrack(selectedTrack))
});


const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
