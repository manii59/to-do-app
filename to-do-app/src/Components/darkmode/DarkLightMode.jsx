import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./DarkLightMode.css";

export const DarkLightMode = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState("dark-theme");

  const isOnHandler = () => {
    setIsOn(!isOn);

    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`toggle-container `} onClick={isOnHandler}>
        <div className="toggle-bg-icon toggle-icon-left">
          <span className="toggle-click-left">
            <MdOutlineLightMode />
          </span>
        </div>

        <div className={`toggle-switch ${isOn ? "light" : "dark"}`}>
          <span className="toggle-click">
            {isOn ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </span>
        </div>

        <div className="toggle-bg-icon toggle-icon-right">
          <span className="toggle-click-left toggle-click-right">
            <MdOutlineDarkMode />
          </span>
        </div>
      </div>
      <div></div>
    </>
  );
};
