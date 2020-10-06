import React, { useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import Lights from "../../components/Lights";
import Ambient from "../../components/Ambient";

import { OrbitControls } from 'drei';

function Sphere(props) {
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
      <sphereBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'aqua'} />
    </mesh>
  )
}

function Dark() {
  return (
    <Canvas>
      <Lights />
      <Ambient />
      <Sphere position={[-1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default Dark;