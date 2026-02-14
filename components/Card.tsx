interface CardProps {
  type: 'theme' | 'letter' | 'forbidden';
  value: string;
}

export default function Card({ type, value }: CardProps) {
  const icon = type === 'theme' ? '🏆' : type === 'letter' ? '🔤' : '🚫';
  return (
    <div className="card p-4 rounded-lg shadow-md bg-white border-2 flex flex-col items-center justify-center min-w-[120px]">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
