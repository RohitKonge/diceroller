import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CustomRoll {
  id: string;
  results: number[];
}

const CustomDiceRoller: React.FC = () => {
  const [sides, setSides] = useState<string>('6');
  const [diceCount, setDiceCount] = useState<string>('1');
  const [currentRoll, setCurrentRoll] = useState<CustomRoll | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleRoll = () => {
    const numSides = parseInt(sides) || 1;
    const numDice = parseInt(diceCount) || 1;
    
    setIsRolling(true);
    setTimeout(() => {
      const results = Array.from({ length: numDice }, () => 
        Math.floor(Math.random() * numSides) + 1
      );
      
      setCurrentRoll({
        id: uuidv4(),
        results
      });
      setIsRolling(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Non-Conventional Dice Roller</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-center">
            <label className="text-gray-700 font-medium text-lg w-40">Sides on a Dice:</label>
            <input
              type="text"
              value={sides}
              onChange={(e) => setSides(e.target.value)}
              className="w-32 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center">
            <label className="text-gray-700 font-medium text-lg w-40">Number of Dice:</label>
            <input
              type="text"
              value={diceCount}
              onChange={(e) => setDiceCount(e.target.value)}
              className="w-32 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
          onClick={handleRoll}
          disabled={isRolling}
        >
          <span className="font-bold">Start ▶</span>
        </button>

        {currentRoll && (
          <div className="mt-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {currentRoll.results.map((result, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 bg-gray-50 text-gray-800 rounded-xl flex items-center justify-center text-2xl font-bold border border-gray-200
                    ${isRolling ? 'animate-bounce' : ''}`}
                >
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomDiceRoller;