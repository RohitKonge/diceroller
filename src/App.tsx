import React from 'react';
import DiceRoller from './components/DiceRoller';
import CustomDiceRoller from './components/CustomDiceRoller';
import DiceInfo from './components/DiceInfo';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Free Online Dice Roller
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Roll virtual dice for D&D, RPGs, board games, and more. Supports D4, D6, D8, D10, D12, D20 dice and custom combinations.
          </p>
        </header>

        <section aria-label="Main Dice Rolling Tools" className="mb-12">
          <DiceRoller />
        </section>

        <section aria-label="Custom Dice Configuration" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Custom Dice Combinations</h2>
          <CustomDiceRoller />
        </section>

        <section aria-label="Dice Information and Help" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Dice Guide & Information</h2>
          <DiceInfo />
        </section>

        <footer className="text-center text-gray-600 mt-16">
          <p>Free Online Dice Roller - Perfect for D&D, Pathfinder, and all tabletop RPGs</p>
          <p className="mt-2">No registration required • Mobile friendly • Save your favorite dice combinations</p>
        </footer>
      </div>
    </main>
  );
}

export default App;