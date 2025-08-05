'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import {
  GalaxyEnergyStreams,
  GalaxyHalo,
  LogoPoints,
  LoadingFallback
} from './ui/galaxy';

export default function LogoGalaxy() {
  const controlsRef = useRef<any>(null);
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalResetFrames = 36;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  const handleDoubleClick = () => {
    if (isMobile) return;
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const defaultTarget = { x: 0, y: 0, z: 0 };
      const defaultPosition = { x: 0, y: 25, z: 25 };
      let frame = 0;
      const animate = () => {
        frame++;
        controls.target.lerp(defaultTarget, 0.18);
        controls.object.position.lerp(defaultPosition, 0.18);
        controls.update();
        if (
          frame < totalResetFrames &&
          (controls.target.distanceTo(defaultTarget) > 0.01 ||
            controls.object.position.distanceTo(defaultPosition) > 0.01)
        ) {
          requestAnimationFrame(animate);
        } else {
          controls.target.copy(defaultTarget);
          controls.object.position.copy(defaultPosition);
          controls.update();
        }
      };
      animate();
    }
  };

  function getAllowedRadius() {
    if (typeof window === 'undefined') return 100;
    const w = window.innerWidth;
    const base = containerRef.current?.offsetWidth || 400;
    let responsiveRadius =
      w >= 1536 ? base * 0.8 :
      w >= 1280 ? base * 0.75 :
      w >= 1024 ? base * 0.7 :
      w >= 640  ? base * 0.65 :
                  base * 0.6;
    const spiralMaxRatio = 2.3 / 2.5;
    const spiralMaxPx = (base / 2) * spiralMaxRatio;
    return Math.min(responsiveRadius, spiralMaxPx);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (isMobile) return;
    if (e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2 + rect.height * 0.20;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const allowedRadius = getAllowedRadius();
    setControlsEnabled(distance <= allowedRadius);
  }

  function handlePointerLeave() {
    if (isMobile) return;
    setControlsEnabled(false);
  }

  useEffect(() => {
    if (isMobile) {
      setControlsEnabled(false);
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <style>{`
          .logo-galaxy-mobile::-webkit-scrollbar { display: none; }
        `}</style>
      )}
      <div
        ref={containerRef}
        className={`w-full aspect-square relative max-h-[600px] bg-transparent${isMobile ? ' logo-galaxy-mobile' : ' overflow-visible'}`}
        onDoubleClick={isMobile ? undefined : handleDoubleClick}
        onPointerMove={isMobile ? undefined : handlePointerMove}
        onPointerLeave={isMobile ? undefined : handlePointerLeave}
        style={{
          background: "transparent",
          position: "relative",
          zIndex: 10,
          touchAction: isMobile ? 'auto' : undefined,
          overflow: isMobile ? 'auto' : undefined,
          paddingBottom: isMobile ? '48px' : undefined,
          scrollbarWidth: isMobile ? 'none' : undefined,
        }}
      >
        <div
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: '90%',
            height: '90%',
            background: 'transparent',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
            <LoadingFallback />
          </div>
        }>
          <div 
            className="absolute inset-0"
            style={{
              width: '450%',
              height: '450%',
              left: '-175%',
              top: isMobile ? '-170%' : '-150%',
              position: isMobile ? 'relative' : 'absolute',
            }}
          >
            <Canvas
              camera={{ 
                position: [0, 25, 25], 
                fov: 50,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
              onCreated={() => setLoaded(true)}
              style={{ 
                overflow: isMobile ? 'auto' : 'visible',
                width: '100%',
                height: '100%'
              }}
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4F46E5" />
              <pointLight position={[10, -10, 5]} intensity={0.5} color="#7C3AED" />
              <pointLight position={[-10, 10, -5]} intensity={0.5} color="#EC4899" />
              <Stars 
                radius={50} 
                depth={50} 
                count={200} 
                factor={4} 
                saturation={0} 
                fade 
              />
              <Suspense fallback={null}>
                <GalaxyEnergyStreams />
                <GalaxyHalo />
                <LogoPoints />
              </Suspense>
              <OrbitControls 
                ref={controlsRef}
                enableZoom={!isMobile}
                enablePan={false}
                enableRotate={!isMobile}
                autoRotate={false}
                enableDamping={true}
                dampingFactor={0.2}
                rotateSpeed={3}
                zoomToCursor={!isMobile}
                minDistance={0.5}
                maxDistance={100}
                makeDefault
                enabled={!isMobile && controlsEnabled}
              />
            </Canvas>
          </div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500 pointer-events-none" />
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-700 pointer-events-none" />
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-300 pointer-events-none" />
        </Suspense>
      </div>
    </>
  );
}
