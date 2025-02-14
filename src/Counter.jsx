import React, { useEffect, useState } from 'react'
import "./App.css"

function Counter() {
  const [issetting, setsetting] = useState(false);
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);

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
    issetting ? (<>
      <div >
        {hour}:{min}:{sec}
        <button className='bg-amber-100 text-black' onClick={handleclick}>CHANGE</button>
      </div>
    </>) : (
      <>
        <div className='bg-indigo-100 h-screen font-iceberg'>
          <div>
            <input type='number' min="0" placeholder='hours' value={hour} onChange={handlehour} />
            <input type='number' min="0" max="60" placeholder='minutes' value={min} onChange={handlemin} />
            <input type='number' min="0" max="60" placeholder='seconds' value={sec} onChange={handlesc} />
          </div>
          <div>
            <button onClick={handleclick} className='text-black'>CHANGE</button>
          </div>
        </div>
      </>
    )
  )
}

export default Counter