import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/* ── Procedural 3D Cake Slice ─────────────────────────────── */
function CakeSlice() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  // Create a cake-slice shape (pie slice)
  const sliceShape = useMemo(() => {
    const shape = new THREE.Shape();
    const angle = Math.PI / 4; // 45-degree slice
    const radius = 1.8;

    shape.moveTo(0, 0);
    shape.lineTo(radius * Math.cos(-angle / 2), radius * Math.sin(-angle / 2));

    const segments = 16;
    for (let i = 0; i <= segments; i++) {
      const a = -angle / 2 + (angle * i) / segments;
      shape.lineTo(radius * Math.cos(a), radius * Math.sin(a));
    }
    shape.lineTo(0, 0);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 1.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  }), []);

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.3, 0, 0.1]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Bottom layer - chocolate */}
        <mesh position={[0, 0, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[sliceShape, { ...extrudeSettings, depth: 0.35 }]} />
          <meshStandardMaterial color="#6B3A2A" roughness={0.6} metalness={0.1} />
        </mesh>

        {/* Cream filling */}
        <mesh position={[0, 0.35, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[sliceShape, { ...extrudeSettings, depth: 0.12 }]} />
          <meshStandardMaterial color="#F5E6D0" roughness={0.4} metalness={0} />
        </mesh>

        {/* Middle layer - vanilla */}
        <mesh position={[0, 0.47, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[sliceShape, { ...extrudeSettings, depth: 0.35 }]} />
          <meshStandardMaterial color="#D4956B" roughness={0.5} metalness={0.05} />
        </mesh>

        {/* Top frosting */}
        <mesh position={[0, 0.82, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[sliceShape, { ...extrudeSettings, depth: 0.18 }]} />
          <meshStandardMaterial color="#E8C9A0" roughness={0.3} metalness={0.15} />
        </mesh>

        {/* Chocolate drizzle on top */}
        <mesh position={[0, 1.0, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <extrudeGeometry args={[sliceShape, { ...extrudeSettings, depth: 0.04, bevelThickness: 0.02, bevelSize: 0.02 }]} />
          <meshStandardMaterial color="#3C1F0F" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Cherry on top */}
        <mesh position={[0.7, 1.15, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#C94040" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Cherry stem */}
        <mesh position={[0.7, 1.35, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.25, 8]} />
          <meshStandardMaterial color="#2D5A1E" roughness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

/* ── Scene Wrapper ────────────────────────────────────────── */
const CakeScene = () => {
  return (
    <div className="w-full h-full" style={{ minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 35 }}
        dpr={[1, 1.5]}
        shadows={{ type: THREE.PCFShadowMap }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF5E6" castShadow shadow-bias={-0.0001} />
        <directionalLight position={[-3, 4, -5]} intensity={0.4} color="#E8D5B0" />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#FFD700" />

        <CakeSlice />

        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.3}
          scale={6}
          blur={2}
          far={4}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default CakeScene;
