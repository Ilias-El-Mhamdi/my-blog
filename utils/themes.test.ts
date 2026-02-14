import { themes } from './themes';

describe('themes', () => {
  it('should have 20 themes', () => {
    expect(themes.length).toBe(20);
  });
});
