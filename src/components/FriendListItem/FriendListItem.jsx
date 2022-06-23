import React from 'react';
import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={`${avatar} avatar`} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};