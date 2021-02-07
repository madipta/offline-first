import React from 'react';
import { render } from '@testing-library/react';

import Sync from './sync';

describe('Sync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sync />);
    expect(baseElement).toBeTruthy();
  });
});
