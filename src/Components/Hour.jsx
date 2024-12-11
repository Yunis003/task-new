import React, { useState, useEffect } from "react";

export default function Hour() {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{`${time.hour} : ${time.min} : ${time.sec}`}</p>
    </div>
  );
}