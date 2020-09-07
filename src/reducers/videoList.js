import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  let newState = {};
  newState.currentVideo = state.currentVideo;
  state.videos = action.videos;
  return newState;
};

export default videoListReducer;
