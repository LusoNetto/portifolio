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

const TorusKnot = ({ position, size, color }: SphereProps) => {

  const ref = useRef<THREE.Mesh>(null!);

  const directionalLigthRef = useRef<THREE.DirectionalLight>(null!);

  const { ligthColor, ligthIntensity } = useControls(
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
    const speed = isHovered ? 0.2 : 1;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.z += delta * speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) - 20
  });
  return (
    <>
      <directionalLight position={[2, 2, 2]} intensity={ligthIntensity} color={ligthColor} ref={directionalLigthRef} />
      <mesh
        position={position}
        ref={ref}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        scale={isHovered ? 1.1 : 1}
      >
        <torusKnotGeometry args={size} />
        <MeshWobbleMaterial factor={0.1} speed={10} color={isClicked ? "red" : color} />
      </mesh>
    </>
  )
}

const SimpleTorusKnot = () => {
  return (
    <Canvas id="canvas-container">
      <ambientLight intensity={0.7} />
      <TorusKnot position={[0, 0, -10]} size={[5, 2, 1000]} color={"white"} />
    </Canvas>
  );
};

export default SimpleTorusKnot;