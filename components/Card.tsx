import { motion } from 'framer-motion';

interface CardProps {
  type: 'theme' | 'letter' | 'forbidden';
  value: string;
}

export default function Card({ type, value }: CardProps) {
  const icon = type === 'theme' ? '🏆' : type === 'letter' ? '🔤' : '🚫';
  
  const borderColor = type === 'theme' 
    ? 'border-purple-400' 
    : type === 'letter' 
    ? 'border-blue-400' 
    : 'border-red-400';

  const bgGradient = type === 'theme'
    ? 'from-purple-50 to-purple-100'
    : type === 'letter'
    ? 'from-blue-50 to-blue-100'
    : 'from-red-50 to-red-100';

  return (
    <motion.div
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`card p-6 rounded-xl shadow-lg bg-gradient-to-br ${bgGradient} border-2 ${borderColor} flex flex-col items-center justify-center min-w-[140px] min-h-[160px]`}
    >
      <motion.div 
        className="text-4xl mb-3"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {icon}
      </motion.div>
      <div className="text-xl font-bold text-gray-800">{value}</div>
      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
        {type === 'theme' ? 'Theme' : type === 'letter' ? 'Start with' : 'Forbidden'}
      </div>
    </motion.div>
  );
}
