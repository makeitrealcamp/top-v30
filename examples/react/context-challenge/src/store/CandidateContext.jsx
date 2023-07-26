import React, { createContext, useState } from 'react';

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [data, setData] = useState({
    Juan: 0,
    Daniel: 0,
    Andrea: 0,
  });
  const [type, setType] = useState('number');
  const [selected, setSelected] = useState('all');

  const handleVotes = (name) => {
    setData({
      ...data,
      [name]: data[name] + 1,
    });
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const values = Object.values(data);
  const total = values.reduce( (acc, cur) => {
    return acc + cur;
  }, 0);

  return (
    <CandidateContext.Provider
      value={{
        data,
        handleVotes,
        handleChange,
        total,
        type,
        selected,
        handleSelect,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
