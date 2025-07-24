import React, { useState } from 'react';
import css from './App.module.css'; 
import type { VoteType, Votes } from './types/votes';
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';


const App: React.FC = () => {
  
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
 
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const canReset = totalVotes > 0;

  return (
    <div className={css.app}>
      {/* Компонент CafeInfo */}
      <CafeInfo />

      {/* Компонент VoteOptions */}
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset} />

      {/* Умовний рендеринг VoteStats або Notification */}
      {totalVotes > 0 ? (
        <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;