import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css';
import * as THREE from 'three';
import { useRef, useState } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";

type SphereProps = {
  position: THREE.Vector3 | [number, number, number]
  size: [number, number, number]
  color: THREE.Color | string
}

const TorusKnot = ({position, size, color} : SphereProps) => {

  const ref = useRef<THREE.Mesh>(null!);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered?0.2:1;
    ref.current.rotation.x += delta*speed;
    ref.current.rotation.y += delta*speed;
    ref.current.rotation.z += delta*speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime)-20
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
      <torusKnotGeometry args={size}/>
      <MeshWobbleMaterial factor={0.1} speed={10} color={isClicked?"red":color}/>
    </mesh>
  )
}

const SimpleTorusKnot = () => {
  return (
    <Canvas id="canvas-container">
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <ambientLight intensity={0.4} />
      <TorusKnot position={[0, 0, -10]} size={[5,2,1000]} color={"purple"} />
    </Canvas>
  );
};

export default SimpleTorusKnot;