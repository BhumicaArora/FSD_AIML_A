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
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, intervalId]);
  function timeFormat(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
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
