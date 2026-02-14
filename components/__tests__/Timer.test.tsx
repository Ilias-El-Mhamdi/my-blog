import { render, screen } from '@testing-library/react';
import Timer from '../Timer';

describe('Timer', () => {
  it('displays 30 initially', () => {
    render(<Timer timeLeft={30} />);
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('displays custom time', () => {
    render(<Timer timeLeft={15} />);
    expect(screen.getByText('15')).toBeInTheDocument();
  });
});
