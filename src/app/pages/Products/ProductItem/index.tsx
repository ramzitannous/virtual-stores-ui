/**
 *
 * ProductItem
 *
 */
import React, { memo } from 'react';
import { Product } from '../../../../api/types/product';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { StarRating } from '../../../components/StarRating';

interface Props {
  product: Product;
  onClick: () => void;
}

const CardMediaInfo = styled(CardMedia)`
  height: 250px;
`;

const ItemWrapper = styled(Grid)`
  padding: 8px;
`;

export const ProductItem = memo(
  ({ product, onClick }: Props) => {
    return (
      <ItemWrapper item={true} lg={3} sm={12} xs={12} onClick={onClick}>
        <Card>
          <CardMediaInfo image={product.images[0].image.productLarge} />
          <CardContent>
            <Typography variant={'h6'}>{product.name}</Typography>
            <Typography variant={'caption'}>by {product.store.name}</Typography>
            <StarRating
              rating={product.reviewsAvg}
              ratersCount={product.reviewsCount}
            />
            <Typography variant={'body1'}>${product.price}</Typography>
          </CardContent>
        </Card>
      </ItemWrapper>
    );
  },
  ({ product: oldProduct }, { product: newProduct }) =>
    oldProduct.id === newProduct.id,
);
