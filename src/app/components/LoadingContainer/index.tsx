/**
 *
 * LoadingContainer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { CircularProgress } from '@material-ui/core';

interface Props {
  loading: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoadingContainer: React.FC<Props> = ({ loading, children }) => {
  return loading ? (
    <Container>
      <CircularProgress variant={'indeterminate'} />
    </Container>
  ) : (
    <>{children}</>
  );
};
