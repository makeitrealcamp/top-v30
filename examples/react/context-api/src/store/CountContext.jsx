import { useState, createContext } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider
      value={{
        count,
        handleIncrement
      }}
    >
      {children}
    </CountContext.Provider>
  )
}