// import totalVotesNum from '../../services/utils.js';
import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const TotalVotes = () => {
  const store = useContext(CandidateContext);

  return (
    <div className="total-votes-card">
      {`Total de votantes: ${store.total}`}
    </div>
  );
};

export default TotalVotes;
