import React, { useState, useEffect } from 'react';
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  function handleStart() {
    setIsRunning((prev) => !prev);
  }
  function handleRestart() {
    setTime(0);
    setIsRunning(false);
  }
  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      setIntervalId(id);
    } else {
     if(intervalId) clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  function timeFormat(time) {
    const hours=Math.floor((time/3600))
    const hr=(hours<10)?('0'+hours):hours
    const minutes = Math.floor((time / 3600)/60);
    const m=(minutes<10)?('0'+minutes):minutes;
    const seconds = time % 60;
    const s=(seconds<10)?('0'+seconds):seconds;
    return `${hr}:${m}:${s}`;
  }
  return (
    <div>
      <h1>Stopwatch App</h1>
      <h2>{timeFormat(time)}</h2>
      <button onClick={handleStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  );
};
export default Stopwatch;
