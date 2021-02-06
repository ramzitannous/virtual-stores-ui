/**
 *
 * LoadingContainer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { CircularProgress } from '@material-ui/core';

interface Props {
  loading: boolean;
  children?: React.ReactElement | false;
}

const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = ({ loading, children }: Props) =>
  loading ? (
    <LoadingWrapper>
      <CircularProgress variant="indeterminate" />
    </LoadingWrapper>
  ) : (
    <>{children}</>
  );
