import React, { useEffect, useState } from "react";
import { cn } from "../../utils";

const CircularProgressBar = ({ className, title, percentage, color }) => {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (deg < +percentage) {
        setDeg((prev) => prev + 1);
        clearInterval(interval);
        return;
      }
    }, 50);
  });

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-[200px] h-[200px] rounded-full before:content-[''] before:rounded-full before:absolute before:inset-1 before:opacity-80 before:bg-neutral-900",
        className
      )}
      style={{
        background: `conic-gradient(${color} ${deg}%, #222 0%)`,
      }}
    >
      <div className="opacity-1 flex items-center justify-center z-10 w-[160px] h-[160px] flex-col bg-neutral-900 rounded-full border-[20px] border-neutral-800 shadow-progress-bar">
        <h2 className="text-3xl font-bold text-white ">
          {deg} <span className="text-lg">%</span>
        </h2>
        <h4 className="text-white uppercase text-xs z-10">{title}</h4>
      </div>
    </div>
  );
};

export default CircularProgressBar;
