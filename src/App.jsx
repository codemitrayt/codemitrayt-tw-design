import React from "react";
import CircularProgressBar from "./components/circular-progress-bar";
import GlowingCornerHoverEffects from "./components/glowing-corner-hover-effect";
import GlowingHoverButton from "./components/glowing-hover-button";

const App = () => {
  return (
    <div className="overflow-hidden bg-black gap-16">
      {/* Animated Progress Bar  */}
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="mb-16 text-6xl font-bold tracking-wider text-orange-400">
          Animated Circular Progress Bar
        </h1>
        <div className="flex items-center justify-center space-x-16">
          <CircularProgressBar
            title="Codemitra YT"
            color="#ea580c"
            percentage={25}
          />
          <CircularProgressBar title="HTML" color="#16a34a" percentage={50} />
          <CircularProgressBar
            title="Typescript"
            color="#e11d48"
            percentage={75}
          />
        </div>
      </div>

      {/* Glowing Corner Hover Effect  */}
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="mb-16 text-6xl font-bold tracking-wider text-blue-400">
          Glowing Corner Hover Effect
        </h1>

        <div className="flex items-center justify-center space-x-16">
          <GlowingCornerHoverEffects color="#22c55e">
            <div>Codemitra YT</div>
          </GlowingCornerHoverEffects>

          <GlowingCornerHoverEffects color="#2563eb">
            <h1>Card Content</h1>
          </GlowingCornerHoverEffects>

          <GlowingCornerHoverEffects color="#db2777">
            <h1>Card Content</h1>
          </GlowingCornerHoverEffects>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="mb-16 text-6xl font-bold tracking-wider text-green-400">
          Glowing Hover Effect Buttons
        </h1>

        <div className="flex items-center justify-center space-x-16">
          <GlowingHoverButton
            color="#db2777"
            title="Modern Button"
            className="rounded-none after:rounded-none"
          />

          <GlowingHoverButton
            color="#22c55e"
            title="Codemitra YT ❤️"
            className="rounded-md after:rounded-md"
          />

          <GlowingHoverButton color="#2563eb" title="😇 Button" />
        </div>
      </div>
    </div>
  );
};

export default App;
