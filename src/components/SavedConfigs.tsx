import React from 'react';
import { Save, Play, X } from 'lucide-react';
import { DiceConfig } from '../types';

interface SavedConfigsProps {
  savedConfigs: DiceConfig[];
  onSaveConfig: (config: DiceConfig) => void;
  onUseConfig: (config: DiceConfig) => void;
  onDeleteConfig: (index: number) => void;
  currentConfig: DiceConfig;
}

const SavedConfigs: React.FC<SavedConfigsProps> = ({
  savedConfigs,
  onSaveConfig,
  onUseConfig,
  onDeleteConfig,
  currentConfig,
}) => {
  const isConfigSaved = savedConfigs.some(
    (config) => config.diceType === currentConfig.diceType && config.count === currentConfig.count
  );

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Saved Configurations</h2>
        <button
          className={`flex items-center px-3 py-1 rounded-md text-sm ${
            isConfigSaved
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
          }`}
          onClick={() => !isConfigSaved && onSaveConfig(currentConfig)}
          disabled={isConfigSaved}
        >
          <Save size={16} className="mr-1" />
          <span>Save Current</span>
        </button>
      </div>

      {savedConfigs.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No saved configurations yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {savedConfigs.map((config, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 rounded-md p-2"
            >
              <span className="font-medium">
                {config.count}d{config.diceType}
              </span>
              <div className="flex gap-1">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => onUseConfig(config)}
                >
                  <Play size={16} className="text-green-600" />
                </button>
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => onDeleteConfig(index)}
                >
                  <X size={16} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedConfigs;