import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import fetch from 'cross-fetch';

var handleVideoSearch = (q) => {
  // Not sure why this works, but spec runner expects this to return a function. Ask and you shall receive!
  return () => {
    // execute get request--this is done in searchYouTube
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => {
      // run results into changeVideo and changeVideoList actions
      changeVideo(items[0]);
      changeVideoList(items);
    });
  }
};

export default handleVideoSearch;
