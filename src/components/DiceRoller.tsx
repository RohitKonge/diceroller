import React, { useState, useEffect } from 'react';
import DiceResult from './DiceResult';
import { rollDice } from '../utils/diceUtils';
import { DiceRoll } from '../types';

const DiceRoller: React.FC = () => {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [currentRoll, setCurrentRoll] = useState<DiceRoll | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  useEffect(() => {
    if (!currentRoll) {
      handleRoll();
    }
  }, []);

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newRoll = rollDice(6, diceCount);
      setCurrentRoll(newRoll);
      setIsRolling(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <label className="text-gray-700 font-medium text-lg mr-4">Number of Dice:</label>
            <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">{diceCount}</span>
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={diceCount}
            onChange={(e) => setDiceCount(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <button
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
          onClick={handleRoll}
          disabled={isRolling}
        >
          <span className="font-bold">Roll Dice ▶</span>
        </button>

        {currentRoll && (
          <DiceResult roll={currentRoll} isRolling={isRolling} />
        )}
      </div>
    </div>
  );
}

export default DiceRoller;