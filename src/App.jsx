import React from "react";
import CircularProgressBar from "./components/circular-progress-bar";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black gap-16">
      <CircularProgressBar
        title="Codemitra YT"
        color="#ea580c"
        percentage={25}
      />
      <CircularProgressBar title="HTML" color="#16a34a" percentage={50} />
      <CircularProgressBar title="Typescript" color="#e11d48" percentage={75} />
    </div>
  );
};

export default App;
