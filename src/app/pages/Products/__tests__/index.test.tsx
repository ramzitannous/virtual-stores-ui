import * as React from 'react';
import { render } from '@testing-library/react';

import { ProductsList } from '..';

describe('<ProductsList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ProductsList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
