interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  const isLow = timeLeft <= 10;
  
  return (
    <div className={`timer text-4xl font-bold p-4 rounded-full w-20 h-20 flex items-center justify-center ${isLow ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-500 text-white'}`}>
      {timeLeft}
    </div>
  );
}
