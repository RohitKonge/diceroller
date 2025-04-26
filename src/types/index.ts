export type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100;

export interface DiceRoll {
  id: string;
  diceType: DiceType;
  count: number;
  results: number[];
  timestamp: Date;
  sum: number;
}

export interface DiceConfig {
  diceType: DiceType;
  count: number;
}