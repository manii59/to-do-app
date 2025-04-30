import React, { useState, useEffect } from "react";

import "./DateTime.css";

export const DateTime = (props) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
