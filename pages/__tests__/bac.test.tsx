import { render, screen } from '@testing-library/react';
import Bac from '../bac';

describe('Bac page', () => {
  it('renders the game component', () => {
    render(<Bac />);
    expect(screen.getByText('Next Round')).toBeInTheDocument();
  });

  it('renders the page title', () => {
    render(<Bac />);
    expect(screen.getByText('Petit Bac')).toBeInTheDocument();
  });
});
