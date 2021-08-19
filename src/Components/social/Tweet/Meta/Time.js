/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const TweetTime = styled.p`
  color: lightgray;
  font-size: 0.8em;
  text-align: right;
  margin: 0 0.5em 1em 0;
`;

// markup
const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <>
      <TweetTime>{timeString}</TweetTime>
    </>
  );
};

export default Time;
