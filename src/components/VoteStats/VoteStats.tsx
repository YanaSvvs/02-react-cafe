import React from 'react';
import css from './VoteStats.module.css'; 
import type { Votes } from '../../types/votes';

// Інтерфейс для пропсів VoteStats
interface VoteStatsProps {
  votes: Votes; 
  totalVotes: number; 
  positiveRate: number; 
}

// Компонент VoteStats
const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  return (
    <div className={css.container}>
      {/* Відображення статистики */}
      <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
      <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
      <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
      <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
};

export default VoteStats;