import React, { useContext } from 'react';
import Candidate from '../Candidate';
import { CandidateContext } from '../../store/CandidateContext';

const ListCandidates = () => {
  const store = useContext(CandidateContext);
  const candidates = Object.keys(store.data);

  return (
    <div className="list-candidates">
      <ul>
        {
          candidates.map((item) => <Candidate key={item} name={item} />)
        }
      </ul>
    </div>
  );
};

export default ListCandidates;
