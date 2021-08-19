/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import { HiOutlineReply } from 'react-icons/hi';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiHeart, FiMessageSquare } from 'react-icons/fi';

const IconBtn = styled.a`
  display: flex;
  justify-content: center;
  gap: 0.2em;
  color: #282c34;
  cursor: pointer;

  :hover {
    color: #61dafb;
    transform: scale(1.1);
  }

  span {
    background-color: #db5461;
    color: white;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    padding: 0.2em;
    text-align: center;
    font-size: 0.5em;
    font-weight: bold;
    position: relative;
    bottom: 10px;
  }
`;

// markup
const ReplyButton = () => (
  <IconBtn>
    <AiOutlineRetweet />
  </IconBtn>
);

const RetweetButton = ({ retweets }) => (
  <IconBtn>
    <HiOutlineReply />
    <span>{retweets}</span>
  </IconBtn>
);

const LikeButton = ({ likes }) => (
  <IconBtn>
    <FiHeart />
    <span>{likes}</span>
  </IconBtn>
);

const MessageButton = () => (
  <IconBtn>
    <FiMessageSquare />
  </IconBtn>
);

export { ReplyButton, LikeButton, MessageButton, RetweetButton };
