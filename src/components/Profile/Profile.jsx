import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileContainer>
      <GlobalStyle />
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
