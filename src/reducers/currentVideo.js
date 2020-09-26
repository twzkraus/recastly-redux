import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return null;
};

export default currentVideoReducer;
