import React from 'react';
import { DiceType } from '../types';

interface DiceSelectorProps {
  selectedDice: DiceType;
  onSelectDice: (diceType: DiceType) => void;
}

const diceTypes: DiceType[] = [4, 6, 8, 10, 12, 20, 100];

const DiceSelector: React.FC<DiceSelectorProps> = ({ selectedDice, onSelectDice }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {diceTypes.map((diceType) => (
        <button
          key={diceType}
          className={`w-12 h-12 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-200 ${
            selectedDice === diceType
              ? 'bg-red-600 text-white shadow-md scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
          onClick={() => onSelectDice(diceType)}
        >
          d{diceType}
        </button>
      ))}
    </div>
  );
};

export default DiceSelector;