import React from 'react'
import {useState} from 'react';
export const 
Form = () => {
    let [name,setName]=useState("");
    let [phone,setPhone]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let saveForm=() =>
    {
        let a=document.getElementById("a").value;
        let b=document.getElementById("b").value;
        let c=document.getElementById("c").value;
        let d=document.getElementById("d").value;
        setName(a);
        setPhone(b);
        setEmail(c);
        setPassword(d);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);    }
  return (
    <div>
        <h1>Registration Form</h1>
        <hr></hr>
        <form>
            <label>Name: </label>
            <input type="textfield" id="a"/><br></br><br></br>
            <label>Phone: </label>
            <input type="number" id="b"/><br></br><br></br>
            <label>Email: </label>
            <input type="email" id="c"/><br></br><br></br>
            <label>Password:</label>
            <input type="Password" id="d"/><br></br><br></br>
            <button onCLick={saveForm}>Submit</button>
        </form>
            </div>
  )
}
