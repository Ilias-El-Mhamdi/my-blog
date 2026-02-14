import { useState, useEffect } from 'react';
import Card from './Card';
import Timer from './Timer';
import InputForm from './InputForm';
import ScoreBoard from './ScoreBoard';
import { selectRandomCards } from '../utils/gameLogic';

interface Cards {
  theme: string;
  letter: string;
  forbidden: string;
}

export default function Game() {
  const [cards, setCards] = useState<Cards>({ theme: '', letter: '', forbidden: '' });
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('bacHighScore');
    if (stored) setHighScore(parseInt(stored));
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  const nextRound = () => {
    setCards(selectRandomCards());
    setTimeLeft(30);
    setIsPlaying(true);
  };

  const handleSubmit = (value: string) => {
    const upperValue = value.toUpperCase();
    const startsWithLetter = upperValue.startsWith(cards.letter);
    const containsForbidden = upperValue.includes(cards.forbidden);
    
    if (startsWithLetter && !containsForbidden) {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('bacHighScore', newScore.toString());
      }
    }
    nextRound();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Petit Bac</h1>
        
        <div className="flex justify-center mb-6">
          <ScoreBoard current={currentScore} high={highScore} />
        </div>

        <div className="flex justify-center mb-6">
          <Timer timeLeft={timeLeft} />
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Card type="theme" value={cards.theme || '?'} />
          <Card type="letter" value={cards.letter || '?'} />
          <Card type="forbidden" value={cards.forbidden || '?'} />
        </div>

        <div className="flex justify-center mb-6">
          <InputForm onSubmit={handleSubmit} disabled={!isPlaying || timeLeft === 0} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={nextRound}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}
