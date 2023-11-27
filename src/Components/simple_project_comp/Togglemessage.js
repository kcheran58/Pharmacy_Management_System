import React from 'react';
import {useState} from 'react'; 
export const Togglemessage = () => {
    let [sb,setSb]=useState(false);
    let showButton=()=>
    {
        setSb(!sb);
    }
  return (
   <div style={{textAlign:"center"}}>
    <h1>DashBoard</h1>
    <hr></hr>
        <button onClick={showButton}>{!sb?"Show Details":"Hide Details"}</button>
        {sb && <p>Hello World!</p>}
    </div>
  )
}
export default Togglemessage;