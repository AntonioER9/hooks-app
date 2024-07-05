import React from 'react';
import { render, screen } from '@testing-library/react';
import {HooksApp} from './HooksApp';

test('renders learn react link', () => {
  render(<HooksApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
