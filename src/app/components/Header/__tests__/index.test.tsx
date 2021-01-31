import * as React from 'react';
import { render } from '@testing-library/react';

import { Header } from '..';

describe('<Header  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Header appName={'test'} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
