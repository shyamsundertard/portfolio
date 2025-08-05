'use client';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Vector3 } from 'three';

export function GalaxyHalo() {
  const haloRef = useRef<any>();
  
  const haloStars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.3;
      
      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);
      
      temp.push({
        position: new Vector3(x, y, z),
        size: 0.02 + Math.random() * 0.03,
        opacity: 0.3 + Math.random() * 0.4
      });
    }
    return temp;
  }, []);
  
  useFrame(() => {
    if (haloRef.current) {
      haloRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={haloRef}>
      {haloStars.map((star, i) => (
        <mesh key={i} position={[star.position.x, star.position.y, star.position.z]} scale={star.size}>
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={star.opacity}
          />
        </mesh>
      ))}
    </group>
  );
}
