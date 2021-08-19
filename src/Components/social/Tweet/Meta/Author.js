/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ProfileName = styled.p`
  color: #282c34;
  font-weight: 700;
`;

const ProfileHandle = styled.p``;

// markup
const Author = ({ name, handle }) => (
  <>
    <ProfileName>{name}</ProfileName>
    <ProfileHandle>{handle}</ProfileHandle>
  </>
);

export default Author;
