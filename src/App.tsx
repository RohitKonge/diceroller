import React from 'react';
import DiceRoller from './components/DiceRoller';
import CustomDiceRoller from './components/CustomDiceRoller';
import DiceInfo from './components/DiceInfo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Virtual Dice Roller
        </h1>
        {/* <div className="mb-12">
          <img 
            src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg"
            alt="Collection of colorful dice"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
          />
        </div> */}
        <DiceRoller />
        <CustomDiceRoller />
        <DiceInfo />
      </div>
    </div>
  );
}

export default App;