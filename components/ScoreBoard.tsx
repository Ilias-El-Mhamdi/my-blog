interface ScoreBoardProps {
  current: number;
  high: number;
}

export default function ScoreBoard({ current, high }: ScoreBoardProps) {
  return (
    <div className="flex gap-6 text-lg">
      <div className="bg-green-100 px-4 py-2 rounded-lg">
        <span className="font-bold text-green-700">Current: {current}</span>
      </div>
      <div className="bg-yellow-100 px-4 py-2 rounded-lg">
        <span className="font-bold text-yellow-700">High: {high}</span>
      </div>
    </div>
  );
}
