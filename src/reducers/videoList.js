import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  state.videos = action.videos;
  return state;
};

export default videoListReducer;
