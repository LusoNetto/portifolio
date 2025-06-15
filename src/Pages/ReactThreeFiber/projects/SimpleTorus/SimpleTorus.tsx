import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css';
import * as THREE from 'three';
import { useRef, useState } from "react";

type SphereProps = {
  position: THREE.Vector3 | [number, number, number]
  size: [number, number, number]
  color: THREE.Color | string
}

const Torus = ({ position, size, color }: SphereProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered?0.2:1;
    ref.current.rotation.x += delta*speed;
    ref.current.rotation.y += delta*speed;
    ref.current.rotation.z += delta*speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime)-11
  });
  return (
    <mesh
    position={position} 
    ref={ref}
    onPointerEnter={()=>setIsHovered(true)}
    onPointerLeave={()=>setIsHovered(false)}
    onClick={()=>setIsClicked(!isClicked)}
    scale={isHovered?1.1:1}
    >
      <torusGeometry args={size} />
      <meshStandardMaterial color={isClicked?"blue":color} />
    </mesh>
  )
}

const SimpleTorus = () => {
  return (
    <Canvas id="canvas-container">
      <directionalLight position={[2, 2, 2]} intensity={0.7} />
      <ambientLight intensity={0.2} />
      <Torus position={[0, 0, -10]} size={[5, 2, 10]} color={"yellow"} />
    </Canvas>
  );
};

export default SimpleTorus;