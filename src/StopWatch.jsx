import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function StopWatch() {
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);
  const [run, setrun] = useState(false);

  const handletoggle = () => {
    setrun(prev => !prev);
  };

  const handleclear = () => {
    setsec(0);
    setmin(0);
    sethour(0);
    setrun(false);
  };

  useEffect(() => {
    if (run) {
      const second = setInterval(() => {
        setsec(prev => prev === 59 ? 0 : prev + 1);
      }, 1000);
      return () => {
        clearInterval(second);
      };
    }
  }, [run]);

  useEffect(() => {
    if (run) {
      const minute = setInterval(() => {
        setmin(prev => prev === 59 ? 0 : prev + 1);
      }, 60000);
      return () => {
        clearInterval(minute);
      };
    }
  }, [run]);

  useEffect(() => {
    if (run) {
      const ghanta = setInterval(() => {
        sethour(prev => prev + 1);
      }, 3600000);
      return () => {
        clearInterval(ghanta);
      };
    }
  }, [run]);

  return (
    <div className="min-h-screen bg-indigo-100 font-iceberg flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center pt-10">
        STOPWATCH
      </h1>
      
      <div className="text-7xl sm:text-8xl lg:text-9xl text-center mt-6">
        {hour}:{min}:{sec}
      </div>
      
      <div className="text-base sm:text-2xl text-center mt-4">
        Hour:Min:Sec
      </div>
      
      <div className="flex gap-4 mt-8">
        <button
          onClick={handletoggle}
          className="text-2xl sm:text-4xl lg:text-5xl hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 transition-all"
        >
          {run ? "Pause" : "Start"}
        </button>
        
        <button
          onClick={handleclear}
          className="text-2xl sm:text-4xl lg:text-5xl hover:bg-indigo-300 hover:scale-105 cursor-pointer border border-r-2 rounded-md p-2 transition-all"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
