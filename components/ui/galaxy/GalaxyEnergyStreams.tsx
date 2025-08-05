'use client';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Vector3 } from 'three';

export function GalaxyEnergyStreams() {
  const streamsRef = useRef<any>();
  const particlesPerArm = 25;
  const totalArms = 9;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let armIndex = 0; armIndex < totalArms; armIndex++) {
      for (let i = 0; i < particlesPerArm; i++) {
        const progress = i / (particlesPerArm - 1);
        
        const baseAngle = (armIndex * Math.PI * 2) / totalArms;
        const distance = 1.0 + progress * 4.2;
        const spiralTightness = 0.3;
        const spiralAngle = baseAngle + distance * spiralTightness;
        
        const x = distance * Math.cos(spiralAngle);
        const z = distance * Math.sin(spiralAngle);
        const y = 0;
        
        temp.push({
          position: new Vector3(x, y, z),
          size: 0.03 + Math.random() * 0.02,
          color: armIndex % 4 === 0 ? "#6366F1" : armIndex % 4 === 1 ? "#8B5CF6" : armIndex % 4 === 2 ? "#06B6D4" : "#10B981",
          armIndex: armIndex,
          progress: progress
        });
      }
    }
    return temp;
  }, []);
  
  useFrame(() => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y += 0.008;
    }
  });
  
  return (
    <group ref={streamsRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.position.x, particle.position.y, particle.position.z]} scale={particle.size}>
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial 
            color={particle.color}
            transparent 
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}
