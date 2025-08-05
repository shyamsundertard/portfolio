"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoSplash({ onFinish }: { onFinish: () => void }) {
  const { theme } = useTheme();
  useEffect(() => {
    const timer = setTimeout(onFinish, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-bl from-sky-600 via-cyan-500 to-blue-500">
      <motion.div
        key={theme}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: [0.7, 1.5, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 1.2, times: [0, 0.5, 1], ease: "easeInOut" }}
      >
        <Image
          src={theme === "dark" ? "/logos/logo_light.png" : "/logos/logo_dark.png"}
          alt="Logo"
          width={120}
          height={120}
          priority
          className="rounded-xl "
        />
      </motion.div>
    </div>
  );
} 