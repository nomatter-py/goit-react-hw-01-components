import styled from 'styled-components';

export const ProfileContainer = styled.div`
 margin: auto;
  width: 300px;
  background-color: #fff;
  border-radius: 2%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p``;

export const Location = styled.p``;

export const Stats = styled.ul`
	display: flex;
	list-style: none;
`;

export const StatsItem = styled.li`
	display:flex;
	padding: 15px;
	width: 33.3%;
	flex-direction: column;
	align-items: center;
	border: 1px solid lightgrey ;
`;

export const StatsLabel = styled.span``;

export const StatsQuantity = styled.span`
	font-weight: 700;
`;