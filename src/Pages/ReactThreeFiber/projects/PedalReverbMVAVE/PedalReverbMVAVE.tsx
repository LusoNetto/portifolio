import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three-stdlib";
import { Vector3 } from 'three';
import * as THREE from 'three';
import './styles.css';

type GLTFResult = GLTF & {
  nodes: {
	[key : string] : THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
};

export function Pedal() {
  const ref = useRef<THREE.Mesh>(null!);

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [buttonPosition, setButtonPosition] = useState([-0.04, 0.027, 0]) as unknown as [Vector3, Dispatch<SetStateAction<number[]>>];
  const [materialLigth, setMaterialLigth] = useState("Material.PowerOffLigth");
  const [powerLigthIntensity, setPowerLigthIntensity] = useState(0);

  useFrame((state, delta) => {
    if(!isHovered){
      ref.current.rotation.x += (delta + Math.sin(state.clock.elapsedTime))/2000;
      ref.current.rotation.y += (delta + Math.sin(state.clock.elapsedTime))/2000;
      ref.current.rotation.z += (delta + Math.sin(state.clock.elapsedTime))/2000;
      ref.current.position.z = Math.sin(state.clock.elapsedTime)/10
    }
  });

  const switchPowerPedal = () => {
    if (!isClicked) {
      setMaterialLigth("Material.PowerOnLigth");
      setPowerLigthIntensity(2);
    } else {
      setMaterialLigth("Material.PowerOffLigth");
      setPowerLigthIntensity(0)
    }
    setIsClicked(!isClicked);
    setButtonPosition([-0.04, 0.023, 0]);
    setTimeout(() => {
      setButtonPosition([-0.04, 0.027, 0]);
    }, 500)
  }

  const { nodes, materials } = useGLTF('public/models/pedalReverbMVAVE.gltf') as unknown as GLTFResult;
  return (
    <group dispose={null} scale={35} rotation={[0.6, 1.8, 0.4]} ref={ref} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)}>
      <group name="Scene">
        <group name="AmbientLight" position={[0, 0.043, 0]} />
        <directionalLight
          name="DirectionalLight"
          intensity={2}
          position={[15.18, 6.98, 7.08]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          name="DirectionalLight"
          intensity={0.5}
          position={[-15.18, -6.98, -7.08]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <ambientLight intensity={0.4} color="#fff" />
        <pointLight name="powerLigth" intensity={powerLigthIntensity} decay={3} color="#99f" position={[-0.015, 0.02, 0]} />
        <group name="pedaleiraglb">
          <mesh
            name="LuzPower"
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials[materialLigth]}
            position={[-0.015, 0.012, 0]}
            scale={[0.003, 0.002, 0.003]}
          />
          <group name="botao" onClick={switchPowerPedal}>
            <mesh
              name="BaseBotao"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials['Material.015']}
              position={[-0.04, 0.013, 0]}
              scale={[0.01, 0.0005, 0.01]}
            />
            <mesh
              name="CabecaBotao"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009.geometry}
              material={materials['Material.013']}
              position={buttonPosition}
              scale={0.01}
            />
            <mesh
              name="PinoBotao"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010.geometry}
              material={materials['Material.006']}
              position={[-0.04, 0.022, 0]}
              scale={[0.007, 0.01, 0.007]}
            />
            <mesh
              name="RoscaBotao"
              castShadow
              receiveShadow
              geometry={nodes.Bolt.geometry}
              material={materials['Material.014']}
              position={[-0.04, 0.02, 0]}
              rotation={[-Math.PI, 0, 0]}
              scale={[0.914, 1.25, 0.909]}
            />
            <mesh
              name="BaseRoscaBotao"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder012.geometry}
              material={materials['Material.027']}
              position={[-0.04, 0.014, 0]}
              scale={[0.009, 0.001, 0.009]}
            />
          </group>
          <mesh
            name="Cylinder006"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials['Material.026']}
            position={[-0.005, 0.002, -0.031]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['Material.028']}
            position={[-0.005, 0.002, 0.033]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials['Material.029']}
            position={[-0.005, 0.002, -0.033]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Material.039']}
            position={[0.05, 0.001, 0.01]}
            scale={[10.5, 12.3, 9.8]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.037']}
            scale={[4.4, 1, 2.4]}
          />
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.040']}
            position={[0.05, 0.002, 0.01]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Bolt001"
            castShadow
            receiveShadow
            geometry={nodes.Bolt001.geometry}
            material={materials['Material.005']}
            position={[-0.047, -0.007, -0.026]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.776, 0.566, 0.776]}
          />
          <mesh
            name="Bolt002"
            castShadow
            receiveShadow
            geometry={nodes.Bolt002.geometry}
            material={materials.Material}
            position={[-0.047, -0.007, 0.026]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.776, 0.566, 0.776]}
          />
          <mesh
            name="Bolt003"
            castShadow
            receiveShadow
            geometry={nodes.Bolt003.geometry}
            material={materials['Material.036']}
            position={[0.047, -0.007, -0.026]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.776, 0.566, 0.776]}
          />
          <mesh
            name="Bolt004"
            castShadow
            receiveShadow
            geometry={nodes.Bolt004.geometry}
            material={materials['Material.001']}
            position={[0.047, -0.007, 0.026]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.776, 0.566, 0.776]}
          />
          <mesh
            name="Cylinder011"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials['Material.041']}
            position={[-0.046, -0.013, 0.021]}
          />
          <mesh
            name="PorcaBotao"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials['Material.042']}
            position={[-0.046, -0.013, -0.021]}
          />
          <mesh
            name="Cylinder018"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials['Material.038']}
            position={[0.046, -0.013, 0.021]}
          />
          <mesh
            name="Cylinder019"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials['Material.043']}
            position={[0.046, -0.013, -0.021]}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.045']}
            position={[0.05, -0.003, -0.01]}
            scale={[1.111, 0.111, 0.878]}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Material.044']}
            position={[0.05, -0.003, -0.01]}
            scale={[1.111, 0.267, 0.989]}
          />
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['Material.007']}
            position={[0.015, 0.02, 0.02]}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Material.003']}
            position={[0.015, 0.02, -0.02]}
          />
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials['Material.009']}
            position={[0.04, 0.02, 0]}
          />
          <mesh
            name="Cylinder015"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials['Material.010']}
            position={[0.04, 0.02, -0.02]}
          />
          <mesh
            name="Cylinder016"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials['Material.008']}
            position={[0.04, 0.02, 0.02]}
          />
          <mesh
            name="Cylinder020"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020.geometry}
            material={materials['Material.002']}
            position={[0.015, 0.02, 0]}
          />
          <mesh
            name="MINI"
            castShadow
            receiveShadow
            geometry={nodes.MINI.geometry}
            material={materials['Material.011']}
            position={[-0.025, 0.0125, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.348, 0.5, 0.37]}
          />
          <mesh
            name="MINI001"
            castShadow
            receiveShadow
            geometry={nodes.MINI001.geometry}
            material={materials['Material.012']}
            position={[0.048, 0.013, -0.02]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI002"
            castShadow
            receiveShadow
            geometry={nodes.MINI002.geometry}
            material={materials['Material.016']}
            position={[-0.002, 0.013, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.348, 1, 0.37]}
          />
          <mesh
            name="MINI003"
            castShadow
            receiveShadow
            geometry={nodes.MINI003.geometry}
            material={materials['Material.050']}
            position={[0.048, 0.013, 0.02]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI004"
            castShadow
            receiveShadow
            geometry={nodes.MINI004.geometry}
            material={materials['Material.051']}
            position={[0.046, 0.013, -0.007]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI005"
            castShadow
            receiveShadow
            geometry={nodes.MINI005.geometry}
            material={materials['Material.052']}
            position={[0.023, 0.013, -0.02]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI007"
            castShadow
            receiveShadow
            geometry={nodes.MINI007.geometry}
            material={materials['Material.054']}
            position={[0.023, 0.013, 0.02]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI008"
            castShadow
            receiveShadow
            geometry={nodes.MINI008.geometry}
            material={materials['Material.055']}
            position={[0.048, 0.013, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI009"
            castShadow
            receiveShadow
            geometry={nodes.MINI009.geometry}
            material={materials['Material.056']}
            position={[0.035, 0.013, -0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI010"
            castShadow
            receiveShadow
            geometry={nodes.MINI010.geometry}
            material={materials['Material.057']}
            position={[0.046, 0.013, 0.007]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI011"
            castShadow
            receiveShadow
            geometry={nodes.MINI011.geometry}
            material={materials['Material.058']}
            position={[0.043, 0.013, 0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI012"
            castShadow
            receiveShadow
            geometry={nodes.MINI012.geometry}
            material={materials['Material.059']}
            position={[0.043, 0.013, -0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI013"
            castShadow
            receiveShadow
            geometry={nodes.MINI013.geometry}
            material={materials['Material.060']}
            position={[0.039, 0.013, 0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI014"
            castShadow
            receiveShadow
            geometry={nodes.MINI014.geometry}
            material={materials['Material.061']}
            position={[0.039, 0.013, -0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI015"
            castShadow
            receiveShadow
            geometry={nodes.MINI015.geometry}
            material={materials['Material.062']}
            position={[0.039, 0.013, -0.01]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI016"
            castShadow
            receiveShadow
            geometry={nodes.MINI016.geometry}
            material={materials['Material.063']}
            position={[0.035, 0.013, 0.009]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.098, 1, 0.107]}
          />
          <mesh
            name="MINI017"
            castShadow
            receiveShadow
            geometry={nodes.MINI017.geometry}
            material={materials['Material.064']}
            position={[-0.005, 0.013, -0.028]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI006"
            castShadow
            receiveShadow
            geometry={nodes.MINI006.geometry}
            material={materials['Material.020']}
            position={[-0.053, 0.013, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI018"
            castShadow
            receiveShadow
            geometry={nodes.MINI018.geometry}
            material={materials['Material.021']}
            position={[0.023, 0.013, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.138, 1, 0.145]}
          />
          <mesh
            name="MINI019"
            castShadow
            receiveShadow
            geometry={nodes.MINI019.geometry}
            material={materials['Material.064']}
            position={[-0.005, 0.013, 0.028]}
            scale={[0.138, 1, 0.145]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('public/models/pedalReverbMVAVE.gltf')

const PedalReverbMVAVE = () => {
  return (
    <Canvas id="canvas-container">
      <Pedal />
      <CameraControls />
    </Canvas>
  );
};

export default PedalReverbMVAVE;
