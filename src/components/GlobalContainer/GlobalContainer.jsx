import React from 'react';

import { Container } from './GlobalContainer.styled';

export const GlobalContainer = props => {
  return <Container>{props.children}</Container>;
};
