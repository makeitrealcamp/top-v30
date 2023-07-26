/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const Filter = () => {
  const store = useContext(CandidateContext);
  const array = ['all', ...Object.keys(store.data)]

  return (
    <div className="filter-container">
      <div className="filter-card">
        <h3>Ver</h3>

        <div>
          <label htmlFor="info-type">Tipo: </label>
          <select name="info-type" id="info-type" onChange={store.handleChange}>
            <option value="number">Numero</option>
            <option value="percentage">Porcentaje</option>
          </select>
        </div>

        <div>
          <label htmlFor="candidate">Filtro: </label>
          <select name="candidate" id="candidate" onChange={store.handleSelect}>
            <option value="all">Todos</option>
            <option value="Juan">Juan</option>
            <option value="Daniel">Daniel</option>
            <option value="Andrea">Andrea</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Filter;
