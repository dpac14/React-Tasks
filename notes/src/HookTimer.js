import React, { useEffect, useState,useRef } from 'react';

function HookTimer() {
    const[timer,setTimer]=useState(0);
    const timerRef=useRef();
    useEffect(()=>{
        timerRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1);
        },1000);
        return()=>{
            clearInterval(timerRef.current)
        }
    },[]);
  return (
    <div>
      Timer:-{timer} 
      <br/>
      <button onClick={()=>clearInterval(timerRef.current)}>Stop Timer</button>
    </div>
  );
}

export default HookTimer;
