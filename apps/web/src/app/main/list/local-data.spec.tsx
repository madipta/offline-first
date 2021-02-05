import React from 'react';
import { render } from '@testing-library/react';

import LocalData from './local-data';

describe('LocalData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocalData />);
    expect(baseElement).toBeTruthy();
  });
});
