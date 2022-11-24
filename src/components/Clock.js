import React, { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      3000
    );
    return () => clearInterval(interval);
  }, [time]);
  return <p> React Clock: {time} </p>;
}
