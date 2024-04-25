import { useState, useEffect } from "react";
import "./Stopwatch.css";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const formateTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const remainingSecs = seconds % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="container">
      <div>
        <h1 className="heading">STOPWATCH</h1>
        <p className="time">Time: {formateTime(elapsedTime)}</p>
        <div className="btn-div">
          <button className="btn" onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
          <button className="btn" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
