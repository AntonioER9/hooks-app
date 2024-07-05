import { useState } from 'react'

export const useCounter = (intialValue: number = 10) => {

  const [counter, setCounter] = useState(intialValue);

  const increment = (value: number = 2) => setCounter(counter + value);

  const substract = () => setCounter(counter - 1);

  const reset = () => setCounter(intialValue);

  return {
    counter,
    increment,
    substract,
    reset
  }
}