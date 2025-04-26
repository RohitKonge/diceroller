import React from 'react';
import { Trash2 } from 'lucide-react';
import { DiceRoll } from '../types';

interface RollHistoryProps {
  history: DiceRoll[];
  onClearHistory: () => void;
}

const RollHistory: React.FC<RollHistoryProps> = ({ history, onClearHistory }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  if (history.length === 0) {
    return (
      <div className="mt-6 bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800">Roll History</h2>
        </div>
        <p className="text-gray-500 text-center py-4">No rolls yet. Start rolling some dice!</p>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Roll History</h2>
        <button
          className="flex items-center text-red-500 hover:text-red-700 transition-colors"
          onClick={onClearHistory}
        >
          <Trash2 size={16} className="mr-1" />
          <span className="text-sm">Clear</span>
        </button>
      </div>
      
      <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
        {history.map((roll) => (
          <div key={roll.id} className="py-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-500">
                {formatTime(roll.timestamp)} - {roll.count}d{roll.diceType}
              </span>
              <span className="font-medium text-gray-800">{roll.sum}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {roll.results.map((result, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center justify-center bg-gray-100 text-gray-800 text-xs rounded-md px-2 py-1"
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollHistory;