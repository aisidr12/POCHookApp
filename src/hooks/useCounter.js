import { useState } from "react"

export const useCounter = ( initialValue=10 ) => {

   const [ counterr, setCounter ] = useState( initialValue );


   
   const increment = () => {
         setCounter( counterr + 1 );
   }

    const decrement = () => {
        //if( counterr===0) return;
            setCounter( counterr - 1 );
    }

    const reset =() => { 
        setCounter( initialValue );
    }

    return {
        counterr,
        increment,
        decrement,
        reset
    }
}