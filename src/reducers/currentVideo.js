import Redux from 'redux';

// NOTE TO SELF: Make sure currentVideoReducer only gets called if action.type is 'CHANGE_VIDEO'
var currentVideoReducer = (state, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return null;
};

export default currentVideoReducer;
