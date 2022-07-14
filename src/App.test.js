import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderPath from './tests/renderPath';

test('Farewell, front-end', () => {
  // render(<App />);
  renderPath("/")
  const linkElement = screen.getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});
