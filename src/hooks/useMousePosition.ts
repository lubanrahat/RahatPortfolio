"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const currentPos = useRef<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    currentPos.current = { x: e.clientX, y: e.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setPosition(currentPos.current);
        rafRef.current = 0;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return position;
}

export function useRelativeMousePosition(
  ref: React.RefObject<HTMLElement | null>
) {
  const mouse = useMousePosition();
  const [relative, setRelative] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((mouse.x - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((mouse.y - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setRelative({ x, y });
  }, [mouse, ref]);

  return relative;
}
