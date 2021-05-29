/**
 *
 * ProductReviews
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useProductReviews } from '../../hooks';
import { ReviewItem } from '../../../../components/ReviewItem';

interface Props {
  productId: string;
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductReviews = ({ productId }: Props) => {
  const { data: reviews, isLoading } = useProductReviews(productId, 1);
  if (isLoading) {
    return null;
  }
  return (
    <List>
      {reviews.results.map(review => (
        <ReviewItem review={review} />
      ))}
    </List>
  );
};
