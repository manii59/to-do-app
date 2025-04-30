import React, { useState, useEffect } from "react";

import "./TimeStamp.css";

export const TimeStamp = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const timeDate = `${formattedDate} - ${formattedTime}`;

    setTime(timeDate);
  }, []);

  return <p className="time-stamp">at {time}</p>;
};
