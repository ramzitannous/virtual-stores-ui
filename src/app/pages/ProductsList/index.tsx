/**
 *
 * ProductsList
 *
 */
import * as React from 'react';
import { LoadingContainer } from '../../components/LoadingContainer';
import { useProducts } from './hooks';
import { Grid } from '@material-ui/core';
import { ProductItem } from './ProductItem';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { ListPagination } from '../../components/ListPagination';

interface Props {}

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
`;

const GridList = styled(Grid)`
  padding: 16px;
`;

export const ProductsList = (props: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts(page);
  const { results: products, count } = data;

  return (
    <Container>
      <Header />
      <LoadingContainer loading={isLoading}>
        {!isLoading && (
          <GridList container={true} justify={'center'}>
            {products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </GridList>
        )}
      </LoadingContainer>
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
