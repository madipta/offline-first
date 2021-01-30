import React from 'react';
import { render } from '@testing-library/react';
import DonaturList from './donatur-list';


describe('DonaturList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DonaturList />);
    expect(baseElement).toBeTruthy();
  });
});
