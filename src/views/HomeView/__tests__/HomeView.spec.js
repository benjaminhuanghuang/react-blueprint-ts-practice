import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../HomeView';

test('renders text', () => {
  const { getByText } = render(<HomeView />);
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
