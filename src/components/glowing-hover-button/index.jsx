import React, { useRef } from "react";
import { cn } from "../../utils";
import "./styles.css";

const GlowingHoverButton = ({ title, color = "#FFFFFF", className }) => {
  const cardContainer = useRef(null);

  const applyOverlayMask = (e) => {
    if (!cardContainer.current) return;
    const x = e.pageX - cardContainer.current.offsetLeft;
    const y = e.pageY - cardContainer.current.offsetTop;
    cardContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --color:${color}`
    );
  };

  return (
    <button
      className={cn(
        "relative button text-white bg-neutral-800 overflow-hidden px-8 py-2 rounded-full after:rounded-full flex items-center justify-center",
        className
      )}
      ref={cardContainer}
      onMouseMove={applyOverlayMask}
    >
      <div
        className="z-10"
        style={{ color: color, textShadow: `0 0 20px ${color}` }}
      >
        {title}
      </div>
    </button>
  );
};

export default GlowingHoverButton;
