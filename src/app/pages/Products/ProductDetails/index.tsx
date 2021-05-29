/**
 *
 * ProductDetails
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Header } from '../../../components/Header';
import { useParams } from 'react-router';
import { useProductById } from '../hooks';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { ImageGallery } from '../../../components/ImageGallery';
import { StarRating } from '../../../components/StarRating';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { LoadingContainer } from '../../../components/LoadingContainer';
import { sizes } from '../../../../styles/media';
import { ProductReviews } from './ProductReviews';

interface Props {}

const Container = styled.div`
  height: 100vh;
`;

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding: 20px;
  grid-column-gap: 20px;
  grid-template-areas:
    'images'
    'info';
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${sizes.medium}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'images info';
  }
`;

const ImageWrapper = styled.div`
  grid-area: images;
`;

const InfoWrapper = styled.div`
  grid-area: info;
  display: grid;
  grid-row-gap: 6px;
  justify-content: center;
`;

const Color = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ color }: { color: string }) => color};
  margin-left: 6px;
  margin-right: 6px;

  @media only screen and (min-width: ${sizes.large}px) {
    width: 64px;
    height: 32px;
  }
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NavigateBroadCrampsWrapper = styled.div`
  padding: 16px;
`;

const Text = styled.div`
  font-weight: bold;
`;

const NavigateBroadCramps = ({
  productName,
  productId,
}: {
  productName?: string;
  productId?: string;
}) => (
  <NavigateBroadCrampsWrapper>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        <HomeIcon height={20} width={20} />
        Home
      </Link>
      <Link color="inherit" href={'/products'}>
        <StoreIcon height={20} width={20} />
        Products
      </Link>
      <Link color="textPrimary" href={`/products/${productId}`}>
        <LocalGroceryStoreIcon height={20} width={20} />
        {productName}
      </Link>
    </Breadcrumbs>
  </NavigateBroadCrampsWrapper>
);

export const ProductDetails = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProductById(id);

  return (
    <Container>
      <Header />
      <LoadingContainer loading={isLoading}>
        <NavigateBroadCramps
          productName={product?.name}
          productId={product?.id}
        />
        <DetailsWrapper>
          <InfoWrapper>
            <Typography variant={'h4'}>{product?.name}</Typography>
            <Typography variant={'caption'}>
              by {product?.store.name}
            </Typography>
            <Typography variant={'body2'}>{product?.description}</Typography>
            <StarRating
              rating={product?.reviewsAvg || 0}
              ratersCount={product?.reviewsCount || 0}
            />
            <Text>colors:</Text>
            <ColorsWrapper>
              {product?.colors.map(color => (
                <Color key={color} color={color.toLowerCase()} />
              ))}
            </ColorsWrapper>
            <Text>
              category:
              <Typography variant={'body2'}>
                {product?.category?.name}
              </Typography>
            </Text>
            <Text>
              Sizes:{' '}
              <Typography variant={'body2'}>
                {product?.sizes.join(', ')}
              </Typography>
            </Text>
          </InfoWrapper>
          <ImageWrapper>
            <ImageGallery images={product?.images || []} />
          </ImageWrapper>
        </DetailsWrapper>
        <ProductReviews productId={id} />
      </LoadingContainer>
    </Container>
  );
};
