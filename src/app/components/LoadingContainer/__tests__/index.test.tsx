import * as React from 'react';
import { render } from '@testing-library/react';

import { LoadingContainer } from '..';

describe('<LoadingContainer  />', () => {
  it('should render loader', () => {
    const loadingIndicator = render(
      <LoadingContainer loading={true}></LoadingContainer>,
    );
    expect(loadingIndicator).toMatchSnapshot();
  });
  it('should render children', () => {
    const loadingIndicator = render(
      <LoadingContainer loading={false}>
        <span>{'test text'}</span>
      </LoadingContainer>,
    );
    loadingIndicator.getByText('test text');
  });
});
