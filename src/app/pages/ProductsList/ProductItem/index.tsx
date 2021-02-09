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

interface Props {
  product: Product;
}

const CardMediaInfo = styled(CardMedia)`
  height: 250px;
`;

const ItemWrapper = styled(Grid)`
  padding: 8px;
`;

export const ProductItem = memo(
  ({ product }: Props) => {
    return (
      <ItemWrapper item={true} lg={3} sm={12} xs={12}>
        <Card>
          <CardMediaInfo image={product.images[0].image.productLarge} />
          <CardContent>
            <Typography variant={'h6'}>{product.name}</Typography>
            <Typography variant={'caption'}>{product.description}</Typography>
          </CardContent>
        </Card>
      </ItemWrapper>
    );
  },
  ({ product: oldProduct }, { product: newProduct }) =>
    oldProduct.id === newProduct.id,
);
