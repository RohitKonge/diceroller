import React from 'react';
import Die from './Die';
import { DiceRoll } from '../types';

interface DiceResultProps {
  roll: DiceRoll;
  isRolling: boolean;
}

const DiceResult: React.FC<DiceResultProps> = ({ roll, isRolling }) => {
  const product = roll.results.reduce((acc, curr) => acc * curr, 1);

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <div className="flex flex-wrap justify-center gap-4">
        {roll.results.map((result, index) => (
          <Die
            key={index}
            value={result}
            isRolling={isRolling}
          />
        ))}
      </div>
      
      <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-gray-600 text-lg">Sum:</div>
          <div className="font-bold text-gray-800 text-right text-lg">{roll.sum}</div>
          
          <div className="text-gray-600 text-lg">Product:</div>
          <div className="font-bold text-gray-800 text-right text-lg">{product}</div>
        </div>
      </div>
    </div>
  );
}

export default DiceResult;