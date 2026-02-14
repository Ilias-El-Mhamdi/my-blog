import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Timer from './Timer';
import InputForm from './InputForm';
import ScoreBoard from './ScoreBoard';
import { selectRandomCards } from '../utils/gameLogic';
import { validateAnswer } from '../utils/validation';

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
  const [roundKey, setRoundKey] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

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

  // Clear feedback after showing
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 500);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const nextRound = () => {
    setCards(selectRandomCards());
    setTimeLeft(30);
    setIsPlaying(true);
    setRoundKey(prev => prev + 1);
  };

  const handleSubmit = (value: string) => {
    const isValid = validateAnswer(value, cards.letter, cards.forbidden);
    setFeedback(isValid ? 'correct' : 'wrong');
    
    if (isValid) {
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
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-purple-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Petit Bac
        </motion.h1>
        
        <div className="flex justify-center mb-6">
          <ScoreBoard current={currentScore} high={highScore} />
        </div>

        <div className="flex justify-center mb-6">
          <Timer timeLeft={timeLeft} />
        </div>

        <AnimatePresence exitBeforeEnter>
          <motion.div 
            key={roundKey}
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card type="theme" value={cards.theme || '?'} />
            <Card type="letter" value={cards.letter || '?'} />
            <Card type="forbidden" value={cards.forbidden || '?'} />
          </motion.div>
        </AnimatePresence>

        {/* Feedback indicator */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={`text-center text-2xl font-bold mb-4 ${
                feedback === 'correct' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {feedback === 'correct' ? '+1 Point!' : 'Try again!'}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mb-6">
          <InputForm onSubmit={handleSubmit} disabled={!isPlaying || timeLeft === 0} />
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={nextRound}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Round
          </motion.button>
        </div>
      </div>
    </div>
  );
}
