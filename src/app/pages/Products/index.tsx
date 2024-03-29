/**
 *
 * ProductsList
 *
 */
import * as React from 'react';
import { useProducts } from './hooks';
import { Grid } from '@material-ui/core';
import { ProductItem } from './ProductItem';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { ListPagination } from '../../components/ListPagination';
import { Skeleton } from '@material-ui/lab';
import { times } from 'lodash';
import { useHistory } from 'react-router';
import { Product } from '../../../api/types/product';

interface Props {}

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
`;

const GridList = styled(Grid)`
  padding: 16px;
`;

const SkeletonWrapper = styled(Grid)`
  padding: 8px;
`;

const LoadingSkeletonItem = () => (
  <SkeletonWrapper item={true} lg={3} sm={12} xs={12}>
    <Skeleton variant="rect" height={250} />
  </SkeletonWrapper>
);

export const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts(page);
  const { results: products, count } = data;
  const history = useHistory();

  const onProductClicked = (product: Product) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Container>
      <Header />
      <GridList container={true} justify={'center'}>
        {isLoading
          ? times(process.env.REACT_APP_PAGE_SIZE, i => (
              <LoadingSkeletonItem key={i} />
            ))
          : products.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                onClick={() => onProductClicked(product)}
              />
            ))}
      </GridList>
      {count > 0 && (
        <ListPagination
          currentPage={page}
          count={Math.floor(count / process.env.REACT_APP_PAGE_SIZE)}
          onPageChanged={selectedPage => setPage(selectedPage)}
        />
      )}
    </Container>
  );
};
