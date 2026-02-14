import { selectRandomCards } from './gameLogic';
import { themes } from './themes';

describe('selectRandomCards', () => {
  it('returns valid theme, letter, forbidden', () => {
    const result = selectRandomCards();
    expect(themes).toContain(result.theme);
    expect(result.letter).toMatch(/^[A-Z]$/);
    expect(result.forbidden).toMatch(/^[A-Z]$/);
    expect(result.forbidden).not.toBe(result.letter);
  });
});
