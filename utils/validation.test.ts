import { validateAnswer } from './validation';

describe('validateAnswer', () => {
  it('returns true for valid answer starting with letter', () => {
    expect(validateAnswer('Apple', 'A', 'B')).toBe(true);
  });

  it('returns false for answer not starting with letter', () => {
    expect(validateAnswer('Banana', 'A', 'B')).toBe(false);
  });

  it('returns false for answer containing forbidden letter', () => {
    expect(validateAnswer('Able', 'A', 'B')).toBe(false);
  });

  it('is case insensitive', () => {
    expect(validateAnswer('apple', 'A', 'B')).toBe(true);
    expect(validateAnswer('APPLE', 'A', 'B')).toBe(true);
  });

  it('returns false for empty answer', () => {
    expect(validateAnswer('', 'A', 'B')).toBe(false);
  });
});
