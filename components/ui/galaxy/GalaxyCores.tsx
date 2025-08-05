'use client';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function GalaxyCentralCore() {
  const coreRef = useRef<any>();
  const diskRef = useRef<any>();
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.02;
      coreRef.current.rotation.z += 0.01;
    }
    if (diskRef.current) {
      diskRef.current.rotation.y += 0.015;
    }
  });
  
  return (
    <group>
      {/* Central core */}
      <group ref={coreRef}>
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial 
            color="#00D4FF" 
            transparent 
            opacity={0.9}
          />
        </mesh>
        
        {/* Inner energy rings */}
        <mesh>
          <torusGeometry args={[1.2, 0.1, 16, 32]} />
          <meshBasicMaterial 
            color="#FF6B9D" 
            transparent 
            opacity={0.7}
          />
        </mesh>
        
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.5, 0.08, 16, 32]} />
          <meshBasicMaterial 
            color="#7C3AED" 
            transparent 
            opacity={0.6}
          />
        </mesh>
      </group>
      
      {/* Accretion disk */}
      <mesh ref={diskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.0, 3.5, 64]} />
        <meshBasicMaterial 
          color="#FFD93D" 
          transparent 
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Add orbital rings component
export function OrbitalRings() {
  return (
    <group>
      {/* Create multiple orbital rings at different levels */}
      {[-3.2, -1.6, 0, 1.6, 3.2].map((yLevel, index) => {
        const radius = Math.sqrt(16 - yLevel * yLevel); // Calculate radius for sphere at this Y level (radius 4)
        return (
          <mesh key={index} position={[0, yLevel, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
            <meshBasicMaterial 
              color="#7C3AED" 
              transparent 
              opacity={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Central mandala core - beautiful geometric center
export function MandalaCore() {
  const coreRef = useRef<any>();
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.015;
      coreRef.current.rotation.z += 0.005;
    }
  });
  
  return (
    <group ref={coreRef}>
      {/* Central flower core */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial 
          color="#FFD93D" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Radiating spokes */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
            <meshBasicMaterial 
              color="#FF6B9D" 
              transparent 
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}
