import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css';
import { useRef, useState } from "react";
import * as THREE from 'three';
import { CameraControls } from '@react-three/drei';
import { useControls } from "leva";

type CubeProps = {
  position: THREE.Vector3 | [number, number, number]
  side: [number, number, number]
  color: THREE.Color | string
}

export const Cube = ({ position, side, color }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const directionalLigthRef = useRef<THREE.DirectionalLight>(null!);

  const {ligthColor, ligthIntensity} = useControls(
    {
      ligthColor: "white",
      ligthIntensity: {
        value: 0.5,
        max: 5,
        min: 0
      }
      
    }
  );
  

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered?0.2:1;
    ref.current.rotation.x += delta*speed;
    ref.current.rotation.y += delta*speed;
    ref.current.rotation.z += delta*speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime)
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isHovered ? 1.1 : 1}
    >
      <directionalLight
        position={[1, 1.5, 2]}
        intensity={ligthIntensity}
        ref={directionalLigthRef}
        color={ligthColor}
      />
      <boxGeometry args={side} />
      <meshStandardMaterial color={isClicked ? "hotpink" : color} />
    </mesh>
  );
}

const SimpleCube = () => {
  return (
    <Canvas id="canvas-container">
      <ambientLight intensity={0.2} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} side={[1, 1, 1]} color={"green"} />
        <Cube position={[-1, 0, 0]} side={[1, 1, 1]} color={"red"} />
        <Cube position={[1, 2, 0]} side={[1, 1, 1]} color={"hotpink"} />
        <Cube position={[-1, 2, 0]} side={[1, 1, 1]} color={"blue"} />
        </group> */}

      <Cube position={[0, 0, 0]} side={[3, 3, 3]} color={"white"} />
      <CameraControls/>
    </Canvas>
  );
};

export default SimpleCube;