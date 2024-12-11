import React, { useState, useEffect } from "react";

export default function Minutes() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => {
                  if (prevHours === 23) {
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                  } else {
                    return prevHours + 1;
                  }
                });
                return 0;
              } else {
                return prevMinutes + 1;
              }
            });
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div>
      <h2>
        Saat: {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div>
        {!isActive ? (
          <button onClick={startTimer}>Başla</button>
        ) : (
          <button onClick={stopTimer}>Dayan</button>
        )}
        <button onClick={resetTimer}>Sıfırla</button>
      </div>
    </div>
  );
}
