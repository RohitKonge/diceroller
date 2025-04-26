import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface DiceCounterProps {
  count: number;
  onCountChange: (count: number) => void;
  min?: number;
  max?: number;
}

const DiceCounter: React.FC<DiceCounterProps> = ({ 
  count, 
  onCountChange, 
  min = 1, 
  max = 10 
}) => {
  const handleDecrement = () => {
    if (count > min) {
      onCountChange(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      onCountChange(count + 1);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
      <button
        className={`flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 transition-colors ${
          count <= min ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
        onClick={handleDecrement}
        disabled={count <= min}
      >
        <Minus size={16} />
      </button>
      <div className="w-12 text-center font-medium text-gray-800">{count}</div>
      <button
        className={`flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 transition-colors ${
          count >= max ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
        onClick={handleIncrement}
        disabled={count >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default DiceCounter;