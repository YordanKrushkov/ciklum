
import React from 'react';
import { Container, Spinner } from './index.styled';

export const Loader: React.FC = () => {
  return (
    <Container>
      <Spinner>
        <div></div><div></div><div></div><div></div>
      </Spinner>
    </Container>
  );
};