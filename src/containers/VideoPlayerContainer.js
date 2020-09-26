import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => {
  console.log('inside VPcontainers, state is', state);
  return {
    video: state.currentVideo
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
export default VideoPlayerContainer;
