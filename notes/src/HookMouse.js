import React, { useEffect, useState } from 'react';

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    useEffect(()=>{
       window.addEventListener('mousemove', (e)=>{
        setX(e.clientX)
        setY(e.clientY)

       }) 
    })
  return (
    <div>
      X- {x} Y- {y}
    </div>
  );
}

export default HookMouse;
