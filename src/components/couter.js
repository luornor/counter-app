import React, { useState, useEffect} from 'react';
import './style.css'

function CounterApp() {
  // useState Hook to manage the counter value
  const [counter, setCounter] = useState(0);


  // useEffect Hook to update the document title with the counter value
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]); // runs every time the counter value changes


  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(
      prevCounter =>{
        return prevCounter + 1
      }
    );
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(
      prevCounter =>{
        return prevCounter - 1
      }
    );
  };


  return (
    <div className='counter-container'>
      <h1>Counter App</h1>
      <div className='counter-value'><span>{counter}</span></div>
      <div className='button-container'>
      <button className='increment-button' onClick={incrementCounter}>Increment</button>
      <button className='decrement-button' onClick={decrementCounter}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterApp;
