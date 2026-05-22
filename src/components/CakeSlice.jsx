import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const sliceColors = [
  '#4A3018', '#6b4423', '#A88054', '#E2C792',
  '#F3E5AB', '#D4E157', '#9CCC65', '#81C784',
  '#E57373', '#D32F2F', '#7B1FA2', '#512DA8'
];

export default function CakeSlice({ index, color, onClick }) {
  const [hovered, setHover] = useState(false);
  const meshRef = useRef();

  const totalSlices = 12;
  const anglePerSlice = (Math.PI * 2) / totalSlices;
  const startAngle = index * anglePerSlice;

  const yPosition = hovered ? 0.3 : 0;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group position={[0, yPosition, 0]} ref={meshRef}>
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
        onPointerOut={() => setHover(false)}
        onClick={() => onClick && onClick(index)}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[4, 4, 1.5, 32, 1, false, startAngle, anglePerSlice]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.8} 
          metalness={hovered ? 0.3 : 0.1}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.15 : 0}
        />
      </mesh>
      
      {hovered && (
        <Text
          position={[
            Math.cos(startAngle + anglePerSlice / 2) * 4.5,
            2,
            Math.sin(startAngle + anglePerSlice / 2) * 4.5
          ]}
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          Month {index + 1}
        </Text>
      )}
    </group>
  );
}

export { sliceColors };