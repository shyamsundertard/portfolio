'use client';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function GalaxySpiralArms() {
  const armsRef = useRef<any>();
  
  useFrame((state) => {
    if (armsRef.current) {
      armsRef.current.rotation.y += 0.003;
    }
  });
  
  const galaxyArms = [
    { baseAngle: 0, spiralTightness: 0.3, color: "#6366F1" },
    { baseAngle: Math.PI * 2 / 9, spiralTightness: 0.28, color: "#8B5CF6" },
    { baseAngle: Math.PI * 4 / 9, spiralTightness: 0.32, color: "#06B6D4" },
    { baseAngle: Math.PI * 6 / 9, spiralTightness: 0.29, color: "#10B981" },
    { baseAngle: Math.PI * 8 / 9, spiralTightness: 0.31, color: "#6366F1" },
    { baseAngle: Math.PI * 10 / 9, spiralTightness: 0.27, color: "#8B5CF6" },
    { baseAngle: Math.PI * 12 / 9, spiralTightness: 0.33, color: "#06B6D4" },
    { baseAngle: Math.PI * 14 / 9, spiralTightness: 0.26, color: "#10B981" },
    { baseAngle: Math.PI * 16 / 9, spiralTightness: 0.34, color: "#6366F1" },
  ];
  
  return (
    <group ref={armsRef}>
      {galaxyArms.map((arm, index) => {
        const points = [];
        
        for (let i = 0; i <= 100; i++) {
          const t = i / 100;
          const distance = 0.8 + t * 7;
          const spiralAngle = arm.baseAngle + distance * arm.spiralTightness;
          
          const x = distance * Math.cos(spiralAngle);
          const z = distance * Math.sin(spiralAngle);
          const y = Math.sin(spiralAngle * 2) * 0.8 * t;
          
          points.push(new THREE.Vector3(x, y, z));
        }
        
        const curve = new THREE.CatmullRomCurve3(points, false);
        const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.03, 8, false);
        
        return (
          <mesh key={index}>
            <primitive object={tubeGeometry} />
            <meshBasicMaterial 
              color={arm.color}
              transparent 
              opacity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}
