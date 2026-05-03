"use client";

import dynamic from "next/dynamic";

const WhisperScene = dynamic(() => import("@/components/WhisperScene"), {
  ssr: false,
  loading: () => (
    <div
      className="h-full w-full"
      style={{ background: "var(--bg)" }}
      aria-hidden
    />
  ),
});

export default function WebGLBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-full min-h-screen w-full"
      style={{ opacity: 0.94 }}
    >
      <WhisperScene />
    </div>
  );
}
