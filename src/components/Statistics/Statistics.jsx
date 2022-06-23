import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({id, label, percentage}) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
  ),
};
