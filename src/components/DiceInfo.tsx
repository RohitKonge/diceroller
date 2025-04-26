import React from 'react';

const DiceInfo: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Guide to Dice Rolling</h2>
          
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Dice for Different Games</h3>
            <p className="text-gray-600 mb-4">
              Different tabletop games require different types of dice. Here's a comprehensive guide:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-600">
              <li><strong>D&D and Pathfinder:</strong> Uses a full set (D4, D6, D8, D10, D12, D20)</li>
              <li><strong>Yahtzee and Board Games:</strong> Traditional six-sided dice (D6)</li>
              <li><strong>Warhammer:</strong> Multiple D6 dice for combat</li>
              <li><strong>Call of Cthulhu:</strong> Primarily uses percentile dice (D100)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Common Dice Types and Their Uses</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">D20 (Twenty-sided)</h4>
                <p className="text-gray-600">Most commonly used for attack rolls and skill checks in D&D. The most iconic RPG die.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">D6 (Six-sided)</h4>
                <p className="text-gray-600">The classic cubic die used in most board games and for damage rolls in many RPGs.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">D12 (Twelve-sided)</h4>
                <p className="text-gray-600">Often used for weapon damage rolls, particularly for larger weapons in RPGs.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">D4 (Four-sided)</h4>
                <p className="text-gray-600">Commonly used for dagger damage and small weapon rolls in various games.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Use an Online Dice Roller?</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600">
              <li>Perfect for online gaming sessions and remote play</li>
              <li>Guaranteed random results using cryptographic algorithms</li>
              <li>Save your favorite dice combinations for quick access</li>
              <li>Track your roll history automatically</li>
              <li>No physical dice required - play anywhere, anytime</li>
              <li>Great for virtual tabletop gaming (VTT) sessions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Popular Dice Rolling Combinations</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-600">
                <li><strong>Character Stats (D&D):</strong> Roll 4D6, drop lowest</li>
                <li><strong>Critical Hit (D&D):</strong> Roll 2D20, take highest</li>
                <li><strong>Advantage Roll:</strong> Roll 2 dice, take the higher number</li>
                <li><strong>Disadvantage Roll:</strong> Roll 2 dice, take the lower number</li>
                <li><strong>Percentile Roll:</strong> Roll D100 (or 2D10) for percentage chances</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Free Online Dice Roller - Available 24/7 • No Registration Required • Mobile Friendly
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Perfect for D&D 5E, Pathfinder, Warhammer, and all tabletop RPGs
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default DiceInfo;