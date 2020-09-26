import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

import exampleVideoData from './data/exampleVideoData.js';

const initialState = {
  currentVideo: exampleVideoData[0],
  videoList: exampleVideoData
};

//TODO: Import the Provider component from 'react-redux' here!
import { Provider } from 'react-redux';
import store from './store/store.js';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} state={initialState}/>
  </Provider>,
  document.getElementById('app')
);
