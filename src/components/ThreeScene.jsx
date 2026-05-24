import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import CakeSlice, { sliceColors } from './CakeSlice';
import CoffeeCup from './CoffeeCup';

import * as THREE from 'three';

THREE.Database?.clear?.();

export default function ThreeScene({ onSliceClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas 
        camera={{ position: [0, 8, 12], fov: 45 }} 
        shadows={{ type: THREE.PCFShadowMap }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = THREE.PCFShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <color attach="background" args={['#FDF8F5']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
          color="#FFF5E6"
        />
        <Environment preset="city" />

        <group position={[-1.5, 0, 0]}>
          {sliceColors.map((color, index) => (
            <CakeSlice 
              key={index} 
              index={index} 
              color={color}
              onClick={(idx) => {
                setHoveredIndex(idx);
                if (onSliceClick) onSliceClick(idx);
              }}
            />
          ))}
        </group>

        <CoffeeCup />

        <ContactShadows 
          position={[0, -0.8, 0]} 
          opacity={0.5} 
          scale={25} 
          blur={2.5} 
          far={10} 
        />

        <OrbitControls 
          enablePan={false} 
          enableZoom={true}
          minDistance={8}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={0.2}
        />
      </Canvas>
    </div>
  );
}