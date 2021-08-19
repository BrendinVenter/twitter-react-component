/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const TweetMessage = styled.p`
  padding: 1em;
  background-color: #fafafa;
  border-radius: 0.75em;
  font-size: 0.75em;
`;

// markup
const Message = ({ message }) => (
  <>
    <TweetMessage>{message}</TweetMessage>
  </>
);

export default Message;
