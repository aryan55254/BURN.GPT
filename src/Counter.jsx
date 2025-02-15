import React, { useEffect, useState } from 'react'
import "./App.css"

function Counter() {
  const [issetting, setsetting] = useState(false);
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);
   const handlecleanup = () => {
    setsetting(prev => !prev);
    setsec(0);
    setmin(0);
    sethour(0);
   };
  const handleclick = () => {
    setsetting(prev => !prev);
  };

  const handlehour = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0)
    sethour(value);
  };

  const handlemin = (e) => {
    const value2 = Math.min(59, Math.max(0, parseInt(e.target.value) || 0));
    setmin(value2);
  };

  const handlesc = (e) => {
    const value3 = Math.min(59, Math.max(0, parseInt(e.target.value) || 0));
    setsec(value3);
  };

  useEffect(() => {
    let intervalId;
    
    if (issetting) {
      if (hour === 0 && min === 0 && sec === 0) {
        setsetting(false);
        return;
      }
      
      intervalId = setInterval(() => {
        if (sec > 0) {
          setsec(prev => prev - 1);
        } else if (min > 0) {
          setmin(prev => prev - 1);
          setsec(59);
        } else if (hour > 0) {
          sethour(prev => prev - 1);
          setmin(59);
          setsec(59);
        }
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [issetting, hour, min, sec]);

  return (
    issetting ? (<div className="min-h-screen bg-indigo-100 font-iceberg flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center pt-10">
        TIMER
      </h1>
      <div className="text-7xl sm:text-8xl lg:text-9xl text-center mt-6">
        {String(hour).padStart(2, '0')}:{String(min).padStart(2, '0')}:{String(sec).padStart(2, '0')}
      </div>
      <div className="text-base sm:text-2xl text-center mt-4">
        Hour:Min:Sec
      </div>
      <button 
        onClick={handleclick}
        className="text-2xl sm:text-4xl lg:text-5xl hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 transition-all mt-8"
      >
        CHANGE
      </button>
    </div>) : (
      <div className="min-h-screen bg-indigo-100 font-iceberg flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center pt-10">
        TIMER
      </h1>
      <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-6">
        <div className="relative">
          <input
            type="number"
            min="0"
            placeholder="00"
            value={hour || ''}
            onChange={handlehour}
            className="w-24 sm:w-32 lg:w-40 py-4 text-5xl sm:text-6xl lg:text-7xl text-center bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-5xl sm:text-6xl lg:text-7xl">:</span>
        </div>
        <div className="relative">
          <input
            type="number"
            min="0"
            max="60"
            placeholder="00"
            value={min || ''}
            onChange={handlemin}
            className="w-24 sm:w-32 lg:w-40 py-4 text-5xl sm:text-6xl lg:text-7xl text-center bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-5xl sm:text-6xl lg:text-7xl">:</span>
        </div>
        <input
          type="number"
          min="0"
          max="60"
          placeholder="00"
          value={sec || ''}
          onChange={handlesc}
          className="w-24 sm:w-32 lg:w-40 py-4 text-5xl sm:text-6xl lg:text-7xl text-center bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      <div className="flex gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg text-center mt-2">
        <span className="w-24 sm:w-32 lg:w-40">HOURS</span>
        <span className="w-24 sm:w-32 lg:w-40">MINUTES</span>
        <span className="w-24 sm:w-32 lg:w-40">SECONDS</span>
      </div>
      <button
        onClick={handleclick}
        className="text-2xl sm:text-4xl lg:text-5xl hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 transition-all mt-8"
      >
        START
      </button>
    </div>
    )
  )
}

export default Counter