"use client";

import { useRef } from "react";
import useParticleCanvas from "@/components/canvas/useParticleCanvas";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticleCanvas(canvasRef as React.RefObject<HTMLCanvasElement>, {
    height: 600,
    particleCount: 50,
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
