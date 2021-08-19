/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Message from './Message';
import Author from './Meta/Author';
import Time from './Meta/Time';
import {
  LikeButton,
  MessageButton,
  ReplyButton,
  RetweetButton,
} from './Buttons';

// Styles
const TweetWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 720px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75em;
  font-size: 1em;
  background-color: white;
  padding: 1em;
`;

const BodyWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1em;
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: lightgray;
  font-size: 0.8em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5em 0;
`;

// Markup

const Tweet = ({ tweet }) => (
  <TweetWrapper>
    <Avatar imgURL={tweet.imgURL} />
    <BodyWrapper>
      <MetaWrapper>
        <Author name={tweet.author.name} handle={tweet.author.handle} />
      </MetaWrapper>
      <Message message={tweet.message} />
      <Time time={tweet.time} />
      <ButtonWrapper>
        <ReplyButton />
        <LikeButton likes={tweet.likes} />
        <RetweetButton retweets={tweet.retweets} />
        <MessageButton />
      </ButtonWrapper>
    </BodyWrapper>
  </TweetWrapper>
);

export default Tweet;
