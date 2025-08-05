'use client';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';
import { Logo } from './Logo';

const logos: string[] = [
  // Group 1: Core Web Technologies
  '/logos/html5.png',
  '/logos/css3.png',
  '/logos/js.png',
  '/logos/ts.png',
  '/logos/webpack.png',
  
  // Group 2: Frontend Frameworks & Libraries
  '/logos/react.png',
  '/logos/redux.png',
  '/logos/next.png',
  '/logos/vite.png',
  '/logos/framer.png',
  
  // Group 3: UI/UX & Styling
  '/logos/tailwindcss.png',
  '/logos/shadcn.png',
  '/logos/materialui.png',
  '/logos/chakraui.png',
  '/logos/figma.png',
  
  // Group 4: Backend & Server
  '/logos/express.png',
  '/logos/nest.png',
  '/logos/firebase.png',
  '/logos/graphql.png',
  '/logos/node.png',
  
  // Group 5: Databases & Storage
  '/logos/mongodb.png',
  '/logos/redis.png',
  '/logos/pgsql.png',
  '/logos/prisma.png',
  '/logos/firestore.png',
  
  // Group 6: DevOps & Cloud
  '/logos/aws.png',
  '/logos/azure.png',
  '/logos/docker.png',
  '/logos/vercel.png',
  '/logos/jenkins.png',
  
  // Group 7: Version Control & CI/CD
  '/logos/git.png',
  '/logos/github.png',
  '/logos/githubactions.png',
  '/logos/npm.png',
  '/logos/eslint.png',
  
  // Group 8: APIs & Testing
  '/logos/jest.png',
  '/logos/restapi.png',
  '/logos/swagger.png',
  '/logos/postman.png',
  '/logos/render.png',
  
  // Group 9: Development Tools & Others
  '/logos/vscode.png',
  '/logos/cursor.png',
  '/logos/jwt.png',
  '/logos/json.png',
  '/logos/cpp.png',
];

export function LogoPoints() {
  const groupRef = useRef<Group>(null);
  
  const textures = useTexture(logos);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 9 }, (_, armIndex) => (
        <group key={armIndex}>
          {Array.from({ length: 5 }, (_, logoIndex) => {
            const overallIndex = armIndex * 5 + logoIndex;
            const texture = Array.isArray(textures) ? textures[overallIndex] : textures;
            
            const opacity = 0.9;
            
            return (
              <Logo
                key={`${armIndex}-${logoIndex}`}
                armIndex={armIndex}
                logoIndex={logoIndex}
                texture={texture}
                opacity={opacity}
              />
            );
          })}
        </group>
      ))}
    </group>
  );
}
