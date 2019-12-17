import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

test('renders text', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
