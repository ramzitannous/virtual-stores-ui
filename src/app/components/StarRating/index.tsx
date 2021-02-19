/**
 *
 * StarRating
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Rating } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

interface Props {
  rating: number;
  ratersCount: number;
}

const Row = styled.div`
  align-items: center;
  flex-direction: row;
`;

export const StarRating = ({ rating, ratersCount }: Props) => {
  return (
    <Row>
      <Rating value={rating} size="large" readOnly={true} />
      <Typography variant={'caption'}>({ratersCount})</Typography>
    </Row>
  );
};
