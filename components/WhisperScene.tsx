"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const COL = {
  bg: "#FAF9F5",
  ink: "#1F242C",
  inkMuted: "#8E96A4",
  alive: "#2BB57F",
  gold: "#D2A33E",
  dead: "#D6483D",
  rule: "#D6DAE0",
} as const;

type NodeKind = "alive" | "gold" | "dead";

type NodeDef = {
  p: [number, number, number];
  k: NodeKind;
};

const NODES: NodeDef[] = [
  { p: [-2.1, 0.9, 0.4], k: "alive" },
  { p: [-1.2, 1.35, -0.5], k: "alive" },
  { p: [-0.4, 0.55, 0.9], k: "gold" },
  { p: [0.35, 1.1, -0.2], k: "alive" },
  { p: [1.15, 0.65, 0.55], k: "alive" },
  { p: [2.05, 1.0, -0.35], k: "gold" },
  { p: [2.45, 0.15, 0.2], k: "alive" },
  { p: [-1.6, -0.35, -0.85], k: "alive" },
  { p: [-0.85, -0.95, 0.15], k: "dead" },
  { p: [0.1, -0.45, -0.95], k: "alive" },
  { p: [1.05, -0.85, 0.45], k: "gold" },
  { p: [1.85, -0.35, -0.55], k: "alive" },
  { p: [-0.2, 0.05, 1.35], k: "alive" },
  { p: [0.95, 1.45, 0.85], k: "alive" },
  { p: [-2.35, -0.85, 0.5], k: "alive" },
  { p: [2.65, -0.75, -0.15], k: "alive" },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [0, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 6],
  [2, 12],
  [12, 13],
  [3, 13],
  [7, 14],
  [11, 15],
  [1, 12],
  [4, 13],
  [9, 12],
];

function NodeOrb({ position, kind }: { position: [number, number, number]; kind: NodeKind }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.9 + position[0]) * 0.04;
  });

  const color =
    kind === "alive" ? COL.alive : kind === "gold" ? COL.gold : COL.dead;

  return (
    <group ref={ref} position={position}>
      {kind === "dead" ? (
        <>
          <mesh>
            <icosahedronGeometry args={[0.22, 0]} />
            <meshBasicMaterial color={COL.dead} transparent opacity={0.22} depthWrite={false} />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.IcosahedronGeometry(0.22, 0)]} />
            <lineBasicMaterial color={COL.dead} transparent opacity={0.95} />
          </lineSegments>
        </>
      ) : kind === "gold" ? (
        <>
          <mesh>
            <icosahedronGeometry args={[0.11, 0]} />
            <meshBasicMaterial color={COL.gold} />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[0.24, 0]} />
            <meshBasicMaterial color={COL.gold} wireframe transparent opacity={0.45} />
          </mesh>
        </>
      ) : (
        <mesh>
          <icosahedronGeometry args={[0.2, 0]} />
          <meshBasicMaterial color={COL.alive} wireframe transparent opacity={0.85} />
        </mesh>
      )}
    </group>
  );
}

function Network() {
  const root = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;
    root.current.rotation.y = t * 0.11;
    root.current.rotation.x = Math.sin(t * 0.07) * 0.07;
  });

  const linePairs = useMemo(() => {
    return LINKS.map(([a, b]) => {
      const A = NODES[a].p;
      const B = NODES[b].p;
      return [
        new THREE.Vector3(...A),
        new THREE.Vector3(...B),
      ] as [THREE.Vector3, THREE.Vector3];
    });
  }, []);

  return (
    <group ref={root}>
      {NODES.map((n, i) => (
        <NodeOrb key={i} position={n.p} kind={n.k} />
      ))}
      {linePairs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={COL.ink}
          opacity={0.18}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={[COL.bg]} />
      <fog attach="fog" args={[COL.bg, 6.5, 19]} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 6, 5]} intensity={0.55} color={COL.ink} />
      <directionalLight position={[-5, -2, -3]} intensity={0.28} color={COL.alive} />

      <Grid
        position={[0, -1.55, 0]}
        infiniteGrid
        fadeDistance={28}
        fadeStrength={1.25}
        cellSize={0.22}
        cellThickness={0.65}
        cellColor={COL.rule}
        sectionSize={2.2}
        sectionThickness={1.1}
        sectionColor={COL.inkMuted}
      />

      <Network />
    </>
  );
}

export default function WhisperScene() {
  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0.35, 8.2], fov: 42, near: 0.1, far: 40 }}
    >
      <Scene />
    </Canvas>
  );
}
