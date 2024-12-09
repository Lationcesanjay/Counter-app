import React, { useEffect, useState, useContext, createContext } from 'react';

 const CounterContext = createContext();

 export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

 export const CounterProvider = ({ children }) => {
   const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

   const increment = () => setCounter((prevCounter) => prevCounter + 1);

   const decrement = () => setCounter((prevCounter) => prevCounter - 1);

   const reset = () => setCounter(0);

   useEffect(() => {
    if (counter !== 0) {   
      localStorage.setItem('counter', JSON.stringify(counter));
    }
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
