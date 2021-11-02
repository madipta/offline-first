import { render } from '@testing-library/react';

import Add from './add';

describe('Add', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Add />);
    expect(baseElement).toBeTruthy();
  });
});
