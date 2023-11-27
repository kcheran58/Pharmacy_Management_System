import React from 'react';
import {useState} from 'react';
export const Counter = () => {
    let [value,setValue]=useState(0);
    const changeIncree=()=>
    {
        setValue(value+1);
    }
    const changeDecree =()=>
    {
        setValue(value-1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <hr></hr>
        <button onClick={changeIncree}>Increement</button>
       <span><h2>{value}</h2></span>
        <button onClick={changeDecree}>Decreement</button>
    </div>
  )
}
