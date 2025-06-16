import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css';
import * as THREE from 'three';
import { useRef, useState } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useControls } from "leva";

type SphereProps = {
  position: THREE.Vector3 | [number, number, number]
  size: [number, number, number]
  color: THREE.Color | string
}

const Torus = ({ position, size, color }: SphereProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  const { ligthColor, ligthIntensity } = useControls({
    ligthColor: 1,
    ligthIntensity: 0.5
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 0.2 : 1;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.z += delta * speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) - 20
  });
  return (
    <>
      <directionalLight position={[2, 2, 2]} intensity={ligthIntensity} color={ligthColor} />
      <mesh
        position={position}
        ref={ref}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        scale={isHovered ? 1.1 : 1}
      >
        <torusGeometry args={size} />
        <MeshWobbleMaterial factor={0.1} speed={10} color={isClicked ? "blue" : color} />
      </mesh>
    </>
  )
}

const SimpleTorus = () => {
  return (
    <Canvas id="canvas-container">
      <ambientLight intensity={0.7} />
      <Torus position={[0, 0, -10]} size={[5, 2, 10]} color={"yellow"} />
    </Canvas>
  );
};

export default SimpleTorus;