import { render, screen } from '@testing-library/react';
import Game from '../Game';

describe('Game', () => {
  it('renders all components', () => {
    render(<Game />);
    expect(screen.getByText('Next Round')).toBeInTheDocument();
  });

  it('renders score board', () => {
    render(<Game />);
    expect(screen.getByText(/Current:/)).toBeInTheDocument();
    expect(screen.getByText(/High:/)).toBeInTheDocument();
  });

  it('renders timer', () => {
    render(<Game />);
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
