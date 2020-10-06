import React, { useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "./components/Lights";
import Ambient from "./components/Ambient";
import "./styles.css";

import { OrbitControls } from 'drei';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()


  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1.5, 1.5, 1.5]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <Lights />
      <Ambient />
      <Box position={[-1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;