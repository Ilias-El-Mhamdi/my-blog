import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('displays theme with icon', () => {
    render(<Card type="theme" value="Sport" />);
    expect(screen.getByText('Sport')).toBeInTheDocument();
  });

  it('displays letter with icon', () => {
    render(<Card type="letter" value="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('displays forbidden with icon', () => {
    render(<Card type="forbidden" value="B" />);
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
