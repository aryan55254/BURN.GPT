import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
function StopWatch() {
    const [sec , setsec] = useState(0);
    const[min , setmin] = useState(0);
    const [hour , sethour] = useState(0);
    const [run , setrun] = useState(false);
    const handletoggle = () => {
        setrun(prev => !prev);
    };
    const handleclear = () => {
        setsec(0);
        setmin(0);
        sethour(0);
        setrun(false);
    }
    useEffect(() => { 
        if (run) {const timer = setInterval (
            ()=>{
                setsec(prev => prev === 59 ? 0 : prev + 1)
            },1000
        );
        return() => {
            clearInterval(timer);
        }}
    },[run]);
  return (
    <div className='bg-indigo-100 h-screen font-iceberg'>
        <div className='text-6xl text-center items-center pt-60'> {hour}:{min}:{sec}</div>
        <div className='mt-10  flex justify-between'>
            <div><button onClick={handletoggle} className='ml-25  text-3xl'>{run ? "Pause" : "Start"}</button></div>
            <div><button onClick={handleclear}  className='mr-25 text-3xl'>Clear</button></div>
        </div>
    </div>
  )
}

export default StopWatch