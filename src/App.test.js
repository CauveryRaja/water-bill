import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const msgElement = screen.getByText(/Hello React/i);
  expect(msgElement).toBeInTheDocument();
});
