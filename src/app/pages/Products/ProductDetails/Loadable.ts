/**
 *
 * Asynchronously loads the component for ProductDetails
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductDetails = lazyLoad(
  () => import('./index'),
  module => module.ProductDetails,
);
