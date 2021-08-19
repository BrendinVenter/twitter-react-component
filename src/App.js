import React from 'react';
import './App.css';
import Tweet from './Components/social/Tweet/Tweet';
import profile from './Assets/brendin-profile.jpg';

const testTweet = {
  message:
    'Your components can display dynamic data using what React calls props. Pretty cool aye!?',
  author: {
    name: 'Brendin Venter',
    handle: '@BVenter',
  },
  imgURL: profile,
  likes: 17,
  retweets: 6,
  time: '2021-08-19T08:03:44+00:00',
};

function App() {
  return (
    <div>
      <Tweet tweet={testTweet} />
    </div>
  );
}

export default App;
