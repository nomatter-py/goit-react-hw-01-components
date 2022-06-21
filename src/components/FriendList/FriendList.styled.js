import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  padding: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 380px;
  background-color: #fff;
  border-radius: 2%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  //&:not(:last-child) {
    margin-bottom: 20px;
  //}
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${p => (p.isOnline===true ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img``;

export const Name = styled.p`font-weight: 700; `;
