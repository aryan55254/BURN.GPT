import React, { useEffect, useState } from 'react'
import "./App.css"
function Counter() {
const [issetting , setsetting] = useState(false); 
const [sec , setsec] = useState(0);
const [min , setmin] = useState(0);
const [hour , sethour] = useState(0);
const handleclick = () =>{
  setsetting(prev => !prev);
};
const handlehour = (e) => {
  const value = Math.max(0,parseInt(e.target.value)||0)
  sethour(value);
};
const handlemin = (e) => {
  const value2 = Math.min(59,Math.max(0,parseInt(e.target.value) || 0));
  setmin(value2);
};
const handlesc = (e) => {
  const value3 = Math.min(59,Math.max(0,parseInt(e.target.value)||0));
  setsec(value3);
};

  return (
    issetting?(<>
    <div >
        {hour}:{min}:{sec}
        <button className='bg-amber-100 text-black' onClick={handleclick}>CHANGE</button>
      </div>
     </>)
   : (
    <>
      <div className='bg-indigo-100 h-screen font-iceberg'>
      <div>
      <input type='number' min="0" placeholder='hours' value={hour} onChange={handlehour} />
      <input type='number'min="0" max="60" placeholder='minutes' value={min} onChange={handlemin} />
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