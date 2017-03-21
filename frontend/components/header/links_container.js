import { connect } from 'react-redux';

import Links from './links';

const mapStateToProps = ({ session, tracks }) => ({
  currentUser: session.currentUser,
  selectedTrack: tracks.selectedTrack
});

const mapDispatchToProps = dispatch => ({

});


const LinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);

export default LinksContainer;
