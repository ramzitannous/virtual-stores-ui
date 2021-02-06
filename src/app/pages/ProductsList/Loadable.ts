import { lazyLoad } from 'utils/loadable';

export const ProductsList = lazyLoad(
  () => import('./index'),
  module => module.ProductsList,
);
