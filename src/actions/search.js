import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import fetch from 'cross-fetch';

export function fetchData(q) {
  return function (dispatch) {
    dispatch(handleVideoSearch(q));

    return fetch(`'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${q}&type=video&key=${YOUTUBE_API_KEY}`)
    .then (
      response => response.json();
    )
    .then (json => {
      console.log('json data is', json);
      // dispatch(handleVideoSearch(q, json));
    }
    )
  }
};


var handleVideoSearch = (q) => {
  // execute get request
  // run results into changeVideo and changeVideoList actions
    // return one main object with all appropriate states
  // $.get({
  //   url:
  // }
  // )
};

export default handleVideoSearch;
