import React from 'react';

const DiceInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            A dice is typically a small, throwable object that has multiple faces (most commonly six) and possible positions that indicate a number (or something else), used for generating random numbers and events. They are typically used for tabletop games, which include a wide variety of games, as well as for gambling. Examples of tabletop games that involve the use of dice include games like backgammon, Boggle, and Yahtzee, where dice are a central component of the game. Some other well-known tabletop games include Monopoly, Risk, Dungeons and Dragons, and Settlers of Catan. There are however, numerous others.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Dice shapes</h3>
          <p className="text-gray-600 mb-4">
            The most commonly used dice shapes are shown in the image, and listed below.
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Tetrahedron: 4 faces – the blue die</li>
            <li>Cube: 6 faces – the orange, cubic die</li>
            <li>Octahedron: 8 faces – the green die</li>
            <li>Pentagonal trapezohedron: 10 faces – the orange, non-cubic die</li>
            <li>Dodecahedron: 12 faces – the yellow die</li>
            <li>Icosahedron: 20 faces – the purple die</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How random is a dice?</h3>
          <p className="text-gray-600 mb-4">
            Based on probability, a die should have an equal probability of landing on each of its faces. However, this is not necessarily the case with mass produced dice as they cannot be truly random, since it is difficult to mass produce dice that are uniform, and there may be differences in the symmetry of the dice. Each dice, particularly d20 (20-sided polyhedral dice) and d8 (8-sided polyhedral dice) is often unbalanced, and more likely to roll certain numbers.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How to test how random your dice is:</h3>
          <p className="text-gray-600 mb-4">
            Although it may not be the most accurate way to test how random your dice is, one relatively quick test you can do involves just a container, some water, and some salt:
          </p>
          <ol className="list-decimal pl-5 mb-4 text-gray-600">
            <li>Get a container that can fit the die you want to test</li>
            <li>Fill the container with water, then add salt and the die to the water – if the die doesn't float, add more salt until the die floats</li>
            <li>Flick the die and take note of which side faces upwards – repeatedly flick the dice and record the results</li>
          </ol>

          <p className="text-gray-600 mb-4">
            Virtual dice, like the one above, are almost always based on pseudo-random number generating algorithms, which are also not truly random. However, a virtual dice roll is likely more close to true randomness than most physical dice.
          </p>

          <p className="text-sm text-gray-500 mt-8 text-center">© 2004 - 2025 Adam Smith</p>
        </div>
      </div>
    </div>
  );
}

export default DiceInfo;