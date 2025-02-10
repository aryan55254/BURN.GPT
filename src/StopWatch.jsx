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
        if (run) {const second = setInterval (
            ()=>{
                setsec(prev => prev === 59 ? 0 : prev + 1)
            },1000
        );
        return() => {
            clearInterval(second);
        }}
    },[run]);
    useEffect(() => { 
        if (run) {const minute = setInterval (
            ()=>{
                setmin(prev => prev === 59 ? 0 : prev + 1)
            },60000
        );
        return() => {
            clearInterval(minute);
        }}
    },[run]);
    useEffect(() => { 
        if (run) {const ghanta = setInterval (
            ()=>{
                sethour(prev => prev + 1)
            },3600000
        );
        return() => {
            clearInterval(ghanta);
        }}
    },[run]);
  return (
    <div className='bg-indigo-100 h-screen font-iceberg'>
        <h1 className='text-center text-6xl pt-10 lg:text-8xl'>STOPWATCH</h1>
        <div className='text-8xl text-center items-center pt-30 lg:pt-30 lg:text-9xl'> {hour}:{min}:{sec}</div>
        <div className='text-xl text-center items-center pt-6'> Hour:Min:Sec</div>
        <div className='mt-10  flex justify-items-center lg:ml-62'>
            <div><button onClick={handletoggle} className='hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 ml-25 mr-2  text-3xl lg:ml-96 lg:text-5xl'>{run ? "Pause" : "Start"}</button></div>
            <div><button onClick={handleclear}  className='hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 mr-25 ml-2 text-3xl lg:  lg:text-5xl'>Clear</button></div>
        </div>
    </div>
  )
}

export default StopWatch