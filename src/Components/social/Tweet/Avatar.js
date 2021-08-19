/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 30%;
  height: 200px;
  border: none;
  padding: 1em;
  border-radius: 50%;
`;

// markup
const Avatar = ({ imgURL }) => (
  <>
    <ProfileImage src={imgURL} alt="profile-image" />
  </>
);

export default Avatar;
