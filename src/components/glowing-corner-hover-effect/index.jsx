import React, { useRef } from "react";
import { cn } from "../../utils";
import "./styles.css";

const GlowingCornerHoverEffects = ({ children, color }) => {
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
    <div
      className={cn(
        "relative card text-white p-5 bg-neutral-800 overflow-hidden h-[400px] w-[320px] flex items-center justify-center"
      )}
      ref={cardContainer}
      onMouseMove={applyOverlayMask}
    >
      <div className="z-10">{children}</div>
    </div>
  );
};

export default GlowingCornerHoverEffects;
