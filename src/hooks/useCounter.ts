import { useState } from 'react'

export const useCounter = (intialValue: number = 10) => {

  const [counter, setCounter] = useState(intialValue);

  const increment = (value: number = 1) => setCounter((current) => current + value);

  const substract = () => setCounter(counter - 1);

  const reset = () => setCounter(intialValue);

  return {
    counter,
    increment,
    substract,
    reset
  }
}