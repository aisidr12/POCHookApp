import { useState } from "react"

export const useCounter = ( initialValue=10 ) => {

   const [ counterr, setCounter ] = useState( initialValue );



   const increment = ( value = 2) => {
         setCounter( counterr + value );
   }

    const decrement = ( value = 2) => {
        //if( counterr===0) return;
            setCounter( counterr - value );
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