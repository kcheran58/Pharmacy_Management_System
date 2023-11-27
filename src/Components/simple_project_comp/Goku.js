import React from 'react';
import {useState} from 'react';
import './gokucss.css';
export const Goku = () => {
    var [formName,setForm]=useState("Base Form");
    const form=["Super Saiyan1","Super Saiyan2","Super Saiyan3","Kaioken","Super Saiyan Blue","Ultra Instinct"];
    const image=["https://media.tenor.com/XfrqyR_-jzIAAAAM/anime-goku.gif",
                "https://media.tenor.com/YOo4nFxFSJ0AAAAM/ssj-goku.gif",
                 "https://media.tenor.com/gV4FaoUv3IMAAAAM/gg.gif",
                 "https://media.tenor.com/_pPE0lFvezoAAAAC/goku-kaioken.gif" ,
                 "https://gifdb.com/images/thumbnail/goku-super-saiyan-king-kai-fist-nr7k0nk4x3h6e61b.webp",
                  "https://media2.giphy.com/media/clnwbP8SbJUvb0Nxty/200w.webp?cid=ecf05e472srio6h55mcdoin1evxgzswi8z8dhdnk36cnya4e&ep=v1_gifs_search&rid=200w.webp&ct=g" ]
    const [count,setCount]=useState(-1);
    let [url,setImage]=useState("https://steemitimages.com/0x0/http://pa1.narvii.com/6240/0b538d9665368874ca0001fd9b72cfc829b018a1_00.gif");
    const formHandler=()=>
    {
      let value=count;
      if(count===form.length-1)
      {
        setForm("It's a Final Form");
      }
      else{
  
        setCount(++value);
        setImage(image[value]);
        setForm(form[value]);
      }
  
    }
    return (
      <div className="goku">
      <br></br>
      <h1>Current Form: {formName}</h1>
      <br></br>
      <img src={url} alt="Goku"></img>
      <br></br><br></br>
      <button onClick={formHandler}>Upgrade</button>
      </div>
    );
}
export default Goku;