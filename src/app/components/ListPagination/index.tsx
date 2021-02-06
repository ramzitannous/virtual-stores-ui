/**
 *
 * ListPagination
 *
 */
import React from 'react';
import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

interface Props {
  count: number;
  onPageChanged: (page: number) => void;
  currentPage: number;
}

const StyledPagination = styled(Pagination)`
  margin: auto;
  padding-bottom: 12px;
`;

export const ListPagination = ({
  count,
  onPageChanged,
  currentPage,
}: Props) => {
  return (
    <StyledPagination
      page={currentPage}
      count={count}
      size="large"
      onChange={(_, page) => onPageChanged(page)}
    />
  );
};
