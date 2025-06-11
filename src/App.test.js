import { render, screen } from '@testing-library/react';
import ProfileSection from './ProfileSection';

test('renders learn react link', () => {
  render(<ProfileSection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
