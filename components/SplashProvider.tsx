"use client";
import { useState, useEffect } from "react";
import LogoSplash from "@/components/ui/LogoSplash";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showSplash && <LogoSplash onFinish={() => setShowSplash(false)} />}
      {!showSplash && <AnimatedBackground dotsCount={200} />}
      {!showSplash && children}
    </>
  );
} 