import React, { useState, useEffect } from "react";

export default function Timer() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [time, setTime] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const startTimer = () => {
    if (!inputMinutes || isNaN(inputMinutes) || inputMinutes <= 0) return;
    setTime(Number(inputMinutes) * 60);
    setIsActive(true);
    setIsPaused(false);
    setInputMinutes("");
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(null);
  };

  return (
    <div>
      {!isActive && (
        <input
          type="number"
          placeholder="Dəqiqə daxil edin"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
        />
      )}
      <div>
        {!isActive && <button onClick={startTimer}>Başla</button>}
        {isActive && !isPaused && <button onClick={pauseTimer}>Dayan</button>}
        {isActive && isPaused && (
          <button onClick={resumeTimer}>Davam et</button>
        )}
        {isActive && <button onClick={resetTimer}>Sıfırla</button>}
      </div>
      {time !== null && (
        <h2>
          Qalan vaxt: {Math.floor(time / 60)} dəqiqə {time % 60} saniyə
        </h2>
      )}
    </div>
  );
}