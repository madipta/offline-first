import { render } from '@testing-library/react';

import ServerData from './server-data';

describe('ServerData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServerData />);
    expect(baseElement).toBeTruthy();
  });
});
