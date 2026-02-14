# Bac Game Design

## Overview
Add an enhanced solo experience game on a hidden page `/bac`, featuring 3 cards (theme, starting letter, forbidden letter) with 20 random themes. Includes timer, input validation, scoring, and localStorage for high scores.

## Architecture
The game lives on a new hidden Next.js page at `/bac` (created as `pages/bac.tsx`), accessible only by direct URL—no navigation links. It builds on your existing Next.js setup with TypeScript and Tailwind CSS. The page renders a single `Game` React component that handles all logic client-side (no API/backend needed), storing game state in React hooks and high scores in localStorage.

## Components
The main `Game` component will orchestrate everything. It includes:
- Three `Card` components with enhanced design, each displaying the name prominently along with an icon:
  - Theme card: icon (e.g., ball for Sport) + theme name (e.g., "Sport").
  - Starting letter card: letter icon + the letter (e.g., "A").
  - Forbidden letter card: styled as a "stop sign" (red octagon with white border) containing a strikethrough letter + small forbidden icon.
- Visual representation of three card decks at the top (stacked card icons or images) to simulate drawing from decks.
- Motion animations: Cards flip/reveal on round start, slide out/discard on "next round" click, with smooth transitions (using CSS or Framer Motion if available in your project).
- A `Timer` component showing a 30-second countdown with visual progress bar.
- An `InputForm` with a text field for typing answers and a submit button.
- A `ScoreBoard` displaying current round score and all-time high score.
- A large "Next Round" button to generate new cards, reset timer/input, and trigger discard animations.

## Data Flow
- **Initialization**: On page load, load a hardcoded array of 20 themes (e.g., ["Sport", "Music", ...]), initialize current score to 0, and retrieve high score from localStorage (default 0).
- **Round Start**: "Next Round" click randomly selects: 1 theme, 1 starting letter (A-Z), 1 forbidden letter (A-Z, ensuring ≠ starting letter). Reset timer to 30s, clear input field, and animate card reveals.
- **During Round**: Timer counts down. User types comma-separated answers in the input field and submits. Each answer is validated: starts with starting letter, doesn't contain forbidden letter, and optionally matches theme keywords (simple string checks).
- **Scoring & End Round**: Valid answers earn +1 point each. On submit or timer expiry, add to current score, update high score if beaten, and display results. Timer expiry auto-submits pending input.
- **Persistence**: High score saves to localStorage on updates; no other data persists across sessions.

## Error Handling
- **Input Validation**: Reject submissions with invalid characters (non-letters, numbers), duplicate answers in same round, or words not starting with the required letter/containing forbidden letter. Show user-friendly error messages (e.g., "Answer must start with A and not contain B").
- **Timer Issues**: Handle browser tab switches (pause/resume if possible) or unexpected resets; fallback to no timer if JS disabled.
- **Data Persistence**: Gracefully handle localStorage failures (e.g., private browsing) by falling back to session-only scores without crashing.
- **Edge Cases**: Prevent forbidden letter matching starting letter during selection; handle empty submissions (no penalty); cap answers per round (e.g., max 10) to avoid spam.

## Testing
- **Unit Tests**: Test random selection functions (ensure all themes/letters are selectable, forbidden ≠ starting). Test validation logic (correctly accepts/rejects answers based on rules). Test scoring (accurate point calculation).
- **Integration Tests**: Simulate a full round (click next, input answers, submit, check score update and localStorage).
- **Edge Case Tests**: Timer expiry, invalid inputs, localStorage disabled.
- Use your existing Jest setup (from package.json) for running tests; add new test files in a `__tests__` folder or alongside components.