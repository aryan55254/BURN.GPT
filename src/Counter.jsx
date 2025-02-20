import React, { useEffect, useState } from 'react';
import { Timer, Play, Settings, RotateCcw } from 'lucide-react';

function Counter() {
  const [issetting, setSetting] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const handleCleanup = () => {
    setSetting(prev => !prev);
    setSec(0);
    setMin(0);
    setHour(0);
  };

  const handleClick = () => {
    setSetting(prev => !prev);
  };

  const handleHour = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setHour(value);
  };

  const handleMin = (e) => {
    const value2 = Math.min(59, Math.max(0, parseInt(e.target.value) || 0));
    setMin(value2);
  };

  const handleSec = (e) => {
    const value3 = Math.min(59, Math.max(0, parseInt(e.target.value) || 0));
    setSec(value3);
  };

  useEffect(() => {
    let intervalId;
    
    if (issetting) {
      if (hour === 0 && min === 0 && sec === 0) {
        setSetting(false);
        return;
      }
      
      intervalId = setInterval(() => {
        if (sec > 0) {
          setSec(prev => prev - 1);
        } else if (min > 0) {
          setMin(prev => prev - 1);
          setSec(59);
        } else if (hour > 0) {
          setHour(prev => prev - 1);
          setMin(59);
          setSec(59);
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
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Timer className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            TIMER
          </h1>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          {issetting ? (
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-mono tracking-wider">
                <span className="text-purple-400">{String(hour).padStart(2, '0')}</span>
                <span className="text-gray-500">:</span>
                <span className="text-pink-400">{String(min).padStart(2, '0')}</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">{String(sec).padStart(2, '0')}</span>
              </div>
              <div className="text-gray-400 mt-4">
                Hours : Minutes : Seconds
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    placeholder="00"
                    value={hour || ''}
                    onChange={handleHour}
                    className="w-24 py-4 text-5xl text-center bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute right-[-16px] top-1/2 -translate-y-1/2 text-5xl text-gray-500">:</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="59"
                    placeholder="00"
                    value={min || ''}
                    onChange={handleMin}
                    className="w-24 py-4 text-5xl text-center bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-pink-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute right-[-16px] top-1/2 -translate-y-1/2 text-5xl text-gray-500">:</span>
                </div>
                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="00"
                  value={sec || ''}
                  onChange={handleSec}
                  className="w-24 py-4 text-5xl text-center bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex justify-center gap-4 text-sm text-gray-400">
                <span className="w-24 text-center">HOURS</span>
                <span className="w-24 text-center">MINUTES</span>
                <span className="w-24 text-center">SECONDS</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleClick}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            {issetting ? (
              <>
                <Settings className="w-5 h-5" />
                Change
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Start
              </>
            )}
          </button>
          
          {!issetting && (
            <button
              onClick={handleCleanup}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Counter;