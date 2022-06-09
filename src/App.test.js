import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the word fight', (fight) => {
  render(<App />);
  const linkElement = screen.getByText(fight);
  expect(linkElement).toBeInTheDocument();
});
