import { render, screen, act, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('Game', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

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

  it('decrements timer after starting', () => {
    render(<Game />);
    const nextRoundButton = screen.getByText('Next Round');
    fireEvent.click(nextRoundButton);
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    expect(screen.getByText('29')).toBeInTheDocument();
  });

  it('stops timer at 0', () => {
    render(<Game />);
    const nextRoundButton = screen.getByText('Next Round');
    fireEvent.click(nextRoundButton);
    
    // Advance timer 30 times (30 seconds)
    for (let i = 0; i < 30; i++) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
    }
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
