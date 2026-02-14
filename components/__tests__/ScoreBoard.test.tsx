import { render, screen } from '@testing-library/react';
import ScoreBoard from '../ScoreBoard';

describe('ScoreBoard', () => {
  it('displays scores', () => {
    render(<ScoreBoard current={5} high={10} />);
    expect(screen.getByText('Current: 5')).toBeInTheDocument();
    expect(screen.getByText('High: 10')).toBeInTheDocument();
  });

  it('displays zero scores', () => {
    render(<ScoreBoard current={0} high={0} />);
    expect(screen.getByText('Current: 0')).toBeInTheDocument();
    expect(screen.getByText('High: 0')).toBeInTheDocument();
  });
});
