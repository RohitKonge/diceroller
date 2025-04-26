import React, { useEffect, useState } from 'react';

interface DieProps {
  value: number;
  isRolling: boolean;
}

const Die: React.FC<DieProps> = ({ value, isRolling }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 6) + 1);
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setDisplayValue(value);
    }
  }, [isRolling, value]);

  const getDots = () => {
    switch (displayValue) {
      case 1:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"/>
          </div>
        );
      case 2:
        return (
          <>
            <div className="absolute top-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="absolute top-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="absolute top-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute top-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="absolute top-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute top-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="absolute top-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute top-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full ml-9"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full mr-9"/>
            </div>
            <div className="absolute bottom-2 left-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full"/>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`relative bg-white text-gray-800 rounded-lg shadow-lg w-16 h-16 border border-gray-200
                 ${isRolling ? 'animate-bounce' : 'transform transition-transform duration-500'}`}
    >
      {getDots()}
    </div>
  );
}

export default Die;