import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter tests', () => { 

  test('should return default values', () => { 

    const { result } = renderHook(() => useCounter());
    const { counter, increment, reset, substract } = result.current; 

    expect(counter).toBe(10);
    expect(substract).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    
  });

  test('should return a counter with value 100', () => { 

    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current; 

    expect(counter).toBe(100);
    
  });

  test('should increment the counter', () => { 

    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current; 
    
    act(() => {
      increment();
    })

    expect(result.current.counter).toBe(11);
    
  });

  test('should substract the counter', () => { 

    const { result } = renderHook(() => useCounter());
    const { counter, substract } = result.current; 
    
    act(() => {
      substract();
    })

    expect(result.current.counter).toBe(9);
    
  });
  test('should reset the counter', () => { 

    const { result } = renderHook(() => useCounter());
    const { counter, substract, reset } = result.current; 
    
    act(() => {
      substract();
      reset();
    })

    expect(result.current.counter).toBe(10);
    
  });

});