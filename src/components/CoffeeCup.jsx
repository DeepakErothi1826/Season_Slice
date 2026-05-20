import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function CoffeeCup() {
  const cupRef = useRef();

  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={cupRef} position={[4.5, 0.25, 3]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <group>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1.2, 0.9, 2, 32]} />
            <meshStandardMaterial color="#FFF8E7" roughness={0.2} metalness={0.1} />
          </mesh>
          
          <mesh position={[0, 1.01, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.01, 32]} />
            <meshStandardMaterial color="#3E2723" roughness={0.9} />
          </mesh>
          
          <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.4, 0.12, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#FFF8E7" roughness={0.3} metalness={0.15} />
          </mesh>
          
          <mesh position={[0, 2.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.15, 1.2, 0.1, 32]} />
            <meshStandardMaterial color="#FFF8E7" roughness={0.25} metalness={0.1} />
          </mesh>
          
          <mesh position={[0, 2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
            <meshStandardMaterial color="#2C1810" roughness={0.8} metalness={0.05} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}