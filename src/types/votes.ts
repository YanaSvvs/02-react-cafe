// Тип для категорій голосування
export type VoteType = 'good' | 'neutral' | 'bad';

// Інтерфейс для об'єкта стану голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
