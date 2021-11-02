import { render } from '@testing-library/react';
import List from './list';


describe('DonaturList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<List />);
    expect(baseElement).toBeTruthy();
  });
});
