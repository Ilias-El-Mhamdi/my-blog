export function validateAnswer(answer: string, letter: string, forbidden: string): boolean {
  if (!answer) return false;
  
  const upperAnswer = answer.toUpperCase();
  const upperLetter = letter.toUpperCase();
  const upperForbidden = forbidden.toUpperCase();
  
  return upperAnswer.startsWith(upperLetter) && !upperAnswer.includes(upperForbidden);
}
