// components/CircularProgress.js
import React, { useEffect, useState } from "react";

const Circular = ({ value, fill }: { value: number; fill: string }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * value) / 100;

  return (
    <div style={{ width: "50px", height: "50px" }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <g style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}>
          <circle
            style={{
              fill: "none",
              strokeWidth: "10",
              stroke: "rgba(255, 255, 255, 0.1)",
            }}
            cx="50"
            cy="50"
            r={radius}
          />
          <circle
            style={{
              fill: "none",
              strokeWidth: "10",
              stroke: fill,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 1s",
              strokeLinecap: "round",
            }}
            cx="50"
            cy="50"
            r={radius}
          />
        </g>
        <text
          style={{
            fill: fill,
            fontSize: "1.5em",
            fontWeight: "bold",
            textAnchor: "middle",
            dominantBaseline: "central",
          }}
          x="50"
          y="50"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default Circular;
