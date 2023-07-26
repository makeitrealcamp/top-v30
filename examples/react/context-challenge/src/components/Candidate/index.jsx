import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const Candidate = ({ name }) => {
  const store = useContext(CandidateContext);

  return (
    <li className="candidate-card" onClick={() => store.handleVotes(name)}>
      {name}
    </li>
  );
};

export default Candidate;
