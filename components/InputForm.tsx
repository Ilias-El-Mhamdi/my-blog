import { useState } from 'react';

interface InputFormProps {
  onSubmit: (value: string) => void;
  disabled: boolean;
}

export default function InputForm({ onSubmit, disabled }: InputFormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg focus:border-blue-500 focus:outline-none"
        placeholder="Your answer..."
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  );
}
