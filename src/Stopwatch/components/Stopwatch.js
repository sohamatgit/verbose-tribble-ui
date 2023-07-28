import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Stopwatch.css";
// import {Clock} from "./Clock";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div>
      <h1 className="stop-watch">Stopwatch</h1>
      <p className="time-elapsed">{elapsedTime} s</p>
      
      {/* <Clock/> */}

      <Stack spacing={2} direction="row" className="button-watch">
        {!isRunning ? (
          <Button onClick={handleStart} variant="outlined">
            Start
          </Button>
        ) : (
          <Button onClick={handleStop} variant="outlined">
            Stop
          </Button>
        )}
        <Button onClick={handleReset} variant="outlined">
          Reset
        </Button>
      </Stack>
    </div>
  );
};

export default Stopwatch;
