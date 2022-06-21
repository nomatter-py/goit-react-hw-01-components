import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListContainer,
  Item,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(item => (
        <Item key={item.id}>
          <Status isOnline={item.isOnline} />
          <Avatar src={item.avatar} alt={`${item.avatar} avatar`} width="48" />
          <Name>{item.name}</Name>
        </Item>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
  ),
};
