import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import { render } from "react-dom";
import React, { useEffect } from "react";
import "../styles/style.css";
import { BoxGeometry } from "three";
import Box from "./Box.jsx";

export default function Three() {
  return (
    <div>
      <Canvas>
        <OrbitControls />
      <Box position-x={-3.5} >
        <Box position-x={1.7}>
          <Box position-x={1.7}>
            <Box position-x={1.7}>
              <Box position-x={1.7} />
            </Box>
          </Box>
        </Box>
      </Box>
      </Canvas>
    </div>
  );
}