import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  width: 400px;
  margin: 10px 0 10px;
  background-color: #fff;
  border-radius: 2%;
  color: grey;
`;

export const Title = styled.h2`
  padding: 40px 0;
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  border: 1px solid lightgrey;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: larger;
`;
