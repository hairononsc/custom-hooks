import { useState } from "react";

export const useCounter = (initalValue = 1) => {
  const [counter, setCounter] = useState(initalValue);
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const reset = () => {
    setCounter(initalValue);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
