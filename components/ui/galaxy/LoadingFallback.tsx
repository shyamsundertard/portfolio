'use client';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef } from 'react';

export function LoadingFallback() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });
  
  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[4, 16, 16]} />
        <meshBasicMaterial 
          color="#4F46E5" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </mesh>
      <Text
        position={[0, 0, 0]}
        fontSize={1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Loading Technologies...
      </Text>
    </group>
  );
}
