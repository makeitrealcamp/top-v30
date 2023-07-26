import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const CandidateVotes = () => {
  const store = useContext(CandidateContext);
  const { type, total, selected, data } = store;
  const candidates = Object.keys(store.data);

  const hideItem = (value) => selected === value || selected === 'all' ? '' : 'hide';
  const typeFormat = (value) => type === 'number' ? data[value] : `${Math.floor((data[value] / total) * 100)}%`

  return (
    <div className="candidate-votes-card">
      <ul>
        {
          candidates.map( item => {
            return (
              <li className={hideItem(item)}>
                {item}: {typeFormat(item)}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default CandidateVotes;
