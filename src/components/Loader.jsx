import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="relative w-32 h-32">
        {/* Gradient rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderImage:
              "linear-gradient(to right, #60a5fa, #c084fc, #f472b6) 1",
          }}
        />

        {/* Center content with gradient text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {progress.toFixed(0)}%
          </span>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
