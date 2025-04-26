import { DiceRoll, DiceType } from '../types';
import { v4 as uuidv4 } from 'uuid';

/**
 * Roll a single die of the specified type
 */
export const rollDie = (diceType: DiceType): number => {
  return Math.floor(Math.random() * diceType) + 1;
};

/**
 * Roll multiple dice of the specified type
 */
export const rollDice = (diceType: DiceType, count: number): DiceRoll => {
  const results = Array.from({ length: count }, () => rollDie(diceType));
  const sum = results.reduce((acc, curr) => acc + curr, 0);
  
  return {
    id: uuidv4(),
    diceType,
    count,
    results,
    timestamp: new Date(),
    sum
  };
};