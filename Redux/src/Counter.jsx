import React, { useState } from 'react'
import { increment,decrement,reset,addValue } from "./features/counter/counterSlice";
import { useSelector,useDispatch } from "react-redux";

export const Counter = () =>{

    const count = useSelector( (state)=>state.counter.count)
    const dispatch=useDispatch();
    const [incrementTo,setIncrementTo]=useState(0)
    const toBeNumber=Number(incrementTo) || 0

    return(
        <section>
            <p>{count}</p> 
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button><br/>
                <input 
                    type="text" 
                    value={incrementTo}
                    onChange={(e)=>setIncrementTo(e.target.value)} 
                     
                    />
                <button onClick={()=>dispatch(addValue(toBeNumber))}>Add value</button><br />
                <button onClick={()=>(dispatch(reset()))}>Reset</button>
            </div>
        </section>
    )
}

export default Counter;
