import { themes } from './themes';

export function selectRandomCards() {
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters[Math.floor(Math.random() * 26)];
  let forbidden = letters[Math.floor(Math.random() * 26)];
  while (forbidden === letter) {
    forbidden = letters[Math.floor(Math.random() * 26)];
  }
  return { theme, letter, forbidden };
}
