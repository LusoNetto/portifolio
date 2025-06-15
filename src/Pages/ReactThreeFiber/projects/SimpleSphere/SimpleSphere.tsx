import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css';
import * as THREE from 'three';
import { useRef, useState } from "react";
import { CameraControls, OrbitControls } from "@react-three/drei";

type SphereProps = {
  position: THREE.Vector3 | [number, number, number]
  size: [number, number, number]
  color: THREE.Color | string
}

const Sphere = ({ position, size, color }: SphereProps) => {
  const ref = useRef<THREE.Mesh>(null!);

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
      onPointerEnter={()=>setIsHovered(true)}
      onPointerLeave={()=>setIsHovered(false)}
      onClick={()=>setIsClicked(!isClicked)}
      scale={isHovered?1.1:1}
      >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isClicked?"blue":color} wireframe />
    </mesh>
  )
}

const SimpleSphere = () => {
  return (
    <Canvas id="canvas-container" >
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <ambientLight intensity={0.3} />
      <Sphere position={[0, 0, 0]} size={[2.4, 30, 30]} color={"lightblue"} />
      <CameraControls/>
    </Canvas>
  );
};

export default SimpleSphere;