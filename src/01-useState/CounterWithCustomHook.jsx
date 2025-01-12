import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counterr,increment,decrement,reset } = useCounter();

  return (
    <>
     <div>Counter with Hook: {counterr}</div>
     <hr/>

        <button onClick={ ()=> increment(2)} className="btn btn-primary">+1</button> 
        <button onClick={ ()=> decrement(2)} className="btn btn-primary">-1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
    </>
  )
}
