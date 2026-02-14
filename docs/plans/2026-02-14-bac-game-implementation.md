# Bac Game Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan.

**Goal:** Implement the bac game on hidden page /bac with enhanced solo experience including cards, timer, scoring, and animations.

**Architecture:** Client-side React component in a new Next.js page, using hooks for state management, localStorage for high scores, and CSS/Framer Motion for animations.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Jest for testing, Framer Motion for animations (check if available in package.json).

---

### Task 1: Define Themes Data

**Files:**
- Create: `utils/themes.ts`

**Step 1: Write the failing test**

```typescript
import { themes } from '../utils/themes';

describe('themes', () => {
  it('should have 20 themes', () => {
    expect(themes.length).toBe(20);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- utils/themes.test.ts`
Expected: FAIL with "Cannot find module '../utils/themes'"

**Step 3: Write minimal implementation**

```typescript
export const themes = [
  'Sport', 'Music', 'Places', 'Games', 'Food', 'Animals', 'Movies', 'Books',
  'Technology', 'Nature', 'Art', 'History', 'Travel', 'Fashion', 'Science',
  'Vehicles', 'Hobbies', 'Professions', 'Countries', 'Colors'
];
```

**Step 4: Run test to verify it passes**

Run: `npm test -- utils/themes.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add utils/themes.ts utils/themes.test.ts
git commit -m "feat: add themes data with 20 broad categories"
```

### Task 2: Create Bac Page

**Files:**
- Create: `pages/bac.tsx`
- Test: `pages/__tests__/bac.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import Bac from '../bac';

describe('Bac page', () => {
  it('renders the game component', () => {
    render(<Bac />);
    expect(screen.getByText('Next Round')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- pages/__tests__/bac.test.tsx`
Expected: FAIL with "Cannot find module '../bac'"

**Step 3: Write minimal implementation**

```typescript
import Game from '../components/Game';

export default function Bac() {
  return <Game />;
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- pages/__tests__/bac.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add pages/bac.tsx pages/__tests__/bac.test.tsx
git commit -m "feat: add bac page with game component"
```

### Task 3: Implement Random Selection Logic

**Files:**
- Create: `utils/gameLogic.ts`
- Test: `utils/gameLogic.test.ts`

**Step 1: Write the failing test**

```typescript
import { selectRandomCards } from '../utils/gameLogic';
import { themes } from '../utils/themes';

describe('selectRandomCards', () => {
  it('returns valid theme, letter, forbidden', () => {
    const result = selectRandomCards();
    expect(themes).toContain(result.theme);
    expect(result.letter).toMatch(/^[A-Z]$/);
    expect(result.forbidden).toMatch(/^[A-Z]$/);
    expect(result.forbidden).not.toBe(result.letter);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- utils/gameLogic.test.ts`
Expected: FAIL with "Cannot find module '../utils/gameLogic'"

**Step 3: Write minimal implementation**

```typescript
import { themes } from './themes';

export function selectRandomCards() {
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letter = letters[Math.floor(Math.random() * 26)];
  let forbidden = letters[Math.floor(Math.random() * 26)];
  while (forbidden === letter) {
    forbidden = letters[Math.floor(Math.random() * 26)];
  }
  return { theme, letter, forbidden };
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- utils/gameLogic.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add utils/gameLogic.ts utils/gameLogic.test.ts
git commit -m "feat: add random card selection logic"
```

### Task 4: Create Card Component

**Files:**
- Create: `components/Card.tsx`
- Test: `components/__tests__/Card.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('displays theme with icon', () => {
    render(<Card type="theme" value="Sport" />);
    expect(screen.getByText('Sport')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Card.test.tsx`
Expected: FAIL with "Cannot find module '../Card'"

**Step 3: Write minimal implementation**

```typescript
interface CardProps {
  type: 'theme' | 'letter' | 'forbidden';
  value: string;
}

export default function Card({ type, value }: CardProps) {
  const icon = type === 'theme' ? '🏆' : type === 'letter' ? '🔤' : '🚫';
  return (
    <div className="card">
      <div>{icon}</div>
      <div>{value}</div>
    </div>
  );
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Card.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Card.tsx components/__tests__/Card.test.tsx
git commit -m "feat: add card component with icon and value"
```

### Task 5: Create Timer Component

**Files:**
- Create: `components/Timer.tsx`
- Test: `components/__tests__/Timer.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import Timer from '../Timer';

describe('Timer', () => {
  it('displays 30 initially', () => {
    render(<Timer timeLeft={30} />);
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Timer.test.tsx`
Expected: FAIL with "Cannot find module '../Timer'"

**Step 3: Write minimal implementation**

```typescript
interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  return <div className="timer">{timeLeft}</div>;
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Timer.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Timer.tsx components/__tests__/Timer.test.tsx
git commit -m "feat: add timer component"
```

### Task 6: Create InputForm Component

**Files:**
- Create: `components/InputForm.tsx`
- Test: `components/__tests__/InputForm.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputForm from '../InputForm';

describe('InputForm', () => {
  it('calls onSubmit with input value', async () => {
    const mockSubmit = jest.fn();
    render(<InputForm onSubmit={mockSubmit} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Apple');
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockSubmit).toHaveBeenCalledWith('Apple');
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/InputForm.test.tsx`
Expected: FAIL with "Cannot find module '../InputForm'"

**Step 3: Write minimal implementation**

```typescript
interface InputFormProps {
  onSubmit: (value: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const value = formData.get('answer') as string;
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="answer" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/InputForm.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/InputForm.tsx components/__tests__/InputForm.test.tsx
git commit -m "feat: add input form component"
```

### Task 7: Create ScoreBoard Component

**Files:**
- Create: `components/ScoreBoard.tsx`
- Test: `components/__tests__/ScoreBoard.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import ScoreBoard from '../ScoreBoard';

describe('ScoreBoard', () => {
  it('displays scores', () => {
    render(<ScoreBoard current={5} high={10} />);
    expect(screen.getByText('Current: 5')).toBeInTheDocument();
    expect(screen.getByText('High: 10')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/ScoreBoard.test.tsx`
Expected: FAIL with "Cannot find module '../ScoreBoard'"

**Step 3: Write minimal implementation**

```typescript
interface ScoreBoardProps {
  current: number;
  high: number;
}

export default function ScoreBoard({ current, high }: ScoreBoardProps) {
  return (
    <div>
      <div>Current: {current}</div>
      <div>High: {high}</div>
    </div>
  );
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/ScoreBoard.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/ScoreBoard.tsx components/__tests__/ScoreBoard.test.tsx
git commit -m "feat: add score board component"
```

### Task 8: Implement Main Game Component

**Files:**
- Create: `components/Game.tsx`
- Modify: `components/Game.tsx` (integrate all sub-components and logic)
- Test: `components/__tests__/Game.test.tsx`

**Step 1: Write the failing test**

```typescript
import { render, screen } from '@testing-library/react';
import Game from '../Game';

describe('Game', () => {
  it('renders all components', () => {
    render(<Game />);
    expect(screen.getByText('Next Round')).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: FAIL with "Cannot find module '../Game'"

**Step 3: Write minimal implementation**

Import all components and assemble with basic state.

```typescript
import { useState, useEffect } from 'react';
import Card from './Card';
import Timer from './Timer';
import InputForm from './InputForm';
import ScoreBoard from './ScoreBoard';
import { selectRandomCards } from '../utils/gameLogic';
import { themes } from '../utils/themes';

export default function Game() {
  const [cards, setCards] = useState({ theme: '', letter: '', forbidden: '' });
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('bacHighScore');
    if (stored) setHighScore(parseInt(stored));
  }, []);

  const nextRound = () => {
    setCards(selectRandomCards());
    setTimeLeft(30);
  };

  const handleSubmit = (value: string) => {
    // Basic validation and scoring
    if (value.startsWith(cards.letter) && !value.includes(cards.forbidden)) {
      setCurrentScore(prev => prev + 1);
    }
  };

  return (
    <div>
      <div>Decks: [visual]</div>
      <Card type="theme" value={cards.theme} />
      <Card type="letter" value={cards.letter} />
      <Card type="forbidden" value={cards.forbidden} />
      <Timer timeLeft={timeLeft} />
      <InputForm onSubmit={handleSubmit} />
      <ScoreBoard current={currentScore} high={highScore} />
      <button onClick={nextRound}>Next Round</button>
    </div>
  );
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Game.tsx components/__tests__/Game.test.tsx
git commit -m "feat: implement main game component with basic integration"
```

### Task 9: Add Timer Logic and Effects

**Files:**
- Modify: `components/Game.tsx`

**Step 1: Write the failing test**

Add to existing test file.

```typescript
it('decrements timer', () => {
  jest.useFakeTimers();
  render(<Game />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText('29')).toBeInTheDocument();
  jest.useRealTimers();
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: FAIL

**Step 3: Write minimal implementation**

Add useEffect for timer countdown.

```typescript
useEffect(() => {
  if (timeLeft > 0) {
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }
}, [timeLeft]);
```

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Game.tsx
git commit -m "feat: add timer countdown logic"
```

### Task 10: Add Validation and Scoring Logic

**Files:**
- Modify: `components/Game.tsx`
- Create: `utils/validation.ts`
- Test: `utils/validation.test.ts`

**Step 1: Write the failing test**

```typescript
import { validateAnswer } from '../utils/validation';

describe('validateAnswer', () => {
  it('validates correctly', () => {
    expect(validateAnswer('Apple', 'A', 'B')).toBe(true);
    expect(validateAnswer('Banana', 'A', 'B')).toBe(false);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- utils/validation.test.ts`
Expected: FAIL

**Step 3: Write minimal implementation**

```typescript
export function validateAnswer(answer: string, letter: string, forbidden: string): boolean {
  return answer.startsWith(letter) && !answer.includes(forbidden);
}
```

Then update Game to use it.

**Step 4: Run test to verify it passes**

Run: `npm test -- utils/validation.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add utils/validation.ts utils/validation.test.ts components/Game.tsx
git commit -m "feat: add answer validation and improved scoring"
```

### Task 11: Add Animations and Styling

**Files:**
- Modify: `components/Card.tsx`, `components/Game.tsx`
- Modify: `styles/globals.css` or add Tailwind classes

**Step 1: Write the failing test**

For animations, perhaps integration test.

```typescript
it('shows animation on next round', () => {
  // Mock animation trigger
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: FAIL

**Step 3: Write minimal implementation**

Add CSS classes for animations, use Framer Motion if available.

E.g., in Card: <motion.div animate={{ rotateY: 180 }} />

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Card.tsx components/Game.tsx styles/globals.css
git commit -m "feat: add card animations and styling"
```

### Task 12: Add localStorage Persistence

**Files:**
- Modify: `components/Game.tsx`

**Step 1: Write the failing test**

```typescript
it('saves high score', () => {
  render(<Game />);
  // Trigger score update
  expect(localStorage.getItem('bacHighScore')).toBe('1');
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: FAIL

**Step 3: Write minimal implementation**

In Game, after scoring, if current > high, update high and localStorage.

**Step 4: Run test to verify it passes**

Run: `npm test -- components/__tests__/Game.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/Game.tsx
git commit -m "feat: add localStorage for high score persistence"
```

### Task 13: Run Linting and Typecheck

**Files:**
- N/A

**Step 1: Run lint**

Run: `npm run lint`

**Step 2: Fix any issues**

If errors, fix them.

**Step 3: Run typecheck**

Run: `npm run typecheck`

**Step 4: Fix any issues**

If errors, fix them.

**Step 5: Commit**

```bash
git add . && git commit -m "fix: linting and typecheck fixes"
```

### Task 14: Run Tests and Verify

**Files:**
- N/A

**Step 1: Run all tests**

Run: `npm test`

**Step 2: Verify coverage**

Run: `npm run test:coverage`

**Step 3: Manual test**

Visit /bac, play a round.

**Step 4: Fix issues**

If any, fix.

**Step 5: Final commit**

```bash
git add . && git commit -m "feat: bac game implementation complete"
```