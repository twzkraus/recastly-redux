import Redux from 'redux';

// NOTE TO SELF: Make sure currentVideoReducer only gets called if action.type is 'CHANGEVIDEO'
var currentVideoReducer = (state, action) => {
  state.currentVideo = action.video;
  return state;
};

export default currentVideoReducer;
