import React,{useState} from 'react';
import './App.css';
const Time =()=>{
   let clock=new Date().toLocaleTimeString();

   const [time,newtime]=useState(clock);
   
   setInterval(() => {
       let clock=new Date().toLocaleTimeString()
       newtime(clock);
   }, 1000);
   function toggleText(){

    let clock=new Date().toLocaleTimeString()
    var x = document.getElementById("showdate");
    x.innerHTML=clock;
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }
    return (
        <>
       <div className='TimeHeading'> <h1 >Time and Date</h1>
        {time}<br/>
        <p id='showdate'></p>
        <button onClick={toggleText}>See Date</button></div>

        </>
    )
}
export default Time;