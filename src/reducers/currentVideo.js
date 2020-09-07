import Redux from 'redux';

// NOTE TO SELF: Make sure currentVideoReducer only gets called if action.type is 'CHANGEVIDEO'
var currentVideoReducer = (state, action) => {
  let newState = {};
  newState.videos = state.videos;
  newState.currentVideo = action.video;
  return newState;
};

export default currentVideoReducer;
