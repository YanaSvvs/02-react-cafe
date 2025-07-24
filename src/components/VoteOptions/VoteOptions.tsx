import React from 'react';
import css from './VoteOptions.module.css'; 
import type { VoteType } from '../../types/votes';

// Інтерфейс для пропсів VoteOptions
interface VoteOptionsProps {
  onVote: (type: VoteType) => void; 
  onReset: () => void; 
  canReset: boolean; 
}

// Компонент VoteOptions
const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      {/* Кнопки голосування */}
      <button className={css.button} onClick={() => onVote('good')}>Good</button>
      <button className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => onVote('bad')}>Bad</button>
      {/* Кнопка Reset, рендериться за умовою canReset */}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default VoteOptions;