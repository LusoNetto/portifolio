import { Canvas, useFrame } from "@react-three/fiber";
import './styles.css'
import { useRef } from "react";


const Cube = ({ position, side, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    console.log(ref.current.rotation.x);
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={side} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const Test = () => {
  return (
    <Canvas id="container">
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} side={[1, 1, 1]} color={"green"} />
        <Cube position={[-1, 0, 0]} side={[1, 1, 1]} color={"red"} />
        <Cube position={[1, 2, 0]} side={[1, 1, 1]} color={"hotpink"} />
        <Cube position={[-1, 2, 0]} side={[1, 1, 1]} color={"blue"} />
      </group> */}

      <Cube position={[0, 0, 0]} side={[1, 1, 1]} color={"light-green"} />
    </Canvas>
  );
};

export default Test;