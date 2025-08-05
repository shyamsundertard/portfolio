'use client';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export function Logo({ armIndex, logoIndex, texture, opacity }: {
  armIndex: number;
  logoIndex: number;
  texture: THREE.Texture;
  opacity: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const targetScale = isHovered ? 1.8 : 1.0;
  const currentScale = useRef(1.0);
  
  useFrame((state) => {
    if (groupRef.current && meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      const totalArms = 9;
      const particlesPerArm = 25;
      const baseAngle = (armIndex * Math.PI * 2) / totalArms;
      
      const particleIndex = logoIndex * 5 + 3;
      const progress = particleIndex / (particlesPerArm - 1);
      
      const distance = 1.2 + progress * 4.0;
      const spiralTightness = 0.3;
      const spiralAngle = baseAngle + distance * spiralTightness;
      
      const x = distance * Math.cos(spiralAngle);
      const z = distance * Math.sin(spiralAngle);
      const y = 0;
      
      groupRef.current.position.set(x, y, z);
      
      meshRef.current.lookAt(state.camera.position);
      
      const scaleMultiplier = Math.min(1.1, 0.5 + distance * 0.06);
      currentScale.current += (targetScale - currentScale.current) * 0.18;
      const finalScale = currentScale.current * scaleMultiplier;
      meshRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh 
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <planeGeometry args={[1.0, 1.0]} />
        <meshBasicMaterial 
          map={texture} 
          transparent 
          alphaTest={0.01}
          opacity={opacity}
          side={THREE.DoubleSide}
          depthWrite={false}
          depthTest={true}
        />
      </mesh>
    </group>
  );
}
