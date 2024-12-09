import React, { useState } from 'react';
import { useCounter } from './CounterContext';

export default function CounterPage() {
  const { counter, increment, decrement, reset } = useCounter();
  const [color, setColor] = useState('text-gray-800'); // Initial color of the counter
  
  // Function to handle increment
  const handleIncrement = () => {
    increment();
    setColor('text-green-500'); // Set the color to green when incrementing
  };

  // Function to handle decrement
  const handleDecrement = () => {
    decrement();
    setColor('text-red-500'); // Set the color to red when decrementing
  };

  // Function to handle reset
  const handleReset = () => {
    reset();
    setColor('text-gray-800'); // Reset the color to gray when reset
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-xl dark:bg-gray-900">
        <h1 className={`text-4xl font-semibold mb-6 ${color}`}>
          Counter: {counter}
        </h1>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleIncrement}
            className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105">
            Increment
          </button>
        
          <button 
            onClick={handleDecrement}
            className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105">
            Decrement
          </button>
        
          <button 
            onClick={handleReset}
            className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
