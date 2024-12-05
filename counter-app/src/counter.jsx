import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function counter(){
    const[val,incval]=useState(0);
    const[val1,incval1]=useState(0);
    function change(){
        incval(val+1);
    }
    function change2(){
        incval(val-1);
    }
    useEffect(()=>{
        incval1(val1+5);
    },[val])
    return(
        <div>
            <h1>{val}</h1>
            <h1>{val1}</h1>
            <button onClick={change}>Increment</button>
            <button onClick={change2}>Decrement</button>
        </div>
    );
}
export default counter;