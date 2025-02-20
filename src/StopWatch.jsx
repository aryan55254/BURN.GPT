import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

function StopWatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [run, setRun] = useState(false);

  const handleToggle = () => {
    setRun(prev => !prev);
  };

  const handleClear = () => {
    setSec(0);
    setMin(0);
    setHour(0);
    setRun(false);
  };

  useEffect(() => {
    if (run) {
      const second = setInterval(() => {
        setSec(prev => prev === 59 ? 0 : prev + 1);
      }, 1000);
      return () => clearInterval(second);
    }
  }, [run]);

  useEffect(() => {
    if (run) {
      const minute = setInterval(() => {
        setMin(prev => prev === 59 ? 0 : prev + 1);
      }, 60000);
      return () => clearInterval(minute);
    }
  }, [run]);

  useEffect(() => {
    if (run) {
      const hour = setInterval(() => {
        setHour(prev => prev + 1);
      }, 3600000);
      return () => clearInterval(hour);
    }
  }, [run]);

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Clock className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            STOPWATCH
          </h1>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <div className="text-6xl md:text-7xl font-mono text-center tracking-wider">
            <span className="text-purple-400">{formatTime(hour)}</span>
            <span className="text-gray-500">:</span>
            <span className="text-pink-400">{formatTime(min)}</span>
            <span className="text-gray-500">:</span>
            <span className="text-purple-400">{formatTime(sec)}</span>
          </div>
          
          <div className="text-center text-gray-400 mt-4">
            Hours : Minutes : Seconds
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleToggle}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
          >
            {run ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {run ? "Pause" : "Start"}
          </button>

          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;