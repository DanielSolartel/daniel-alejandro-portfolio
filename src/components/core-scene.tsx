"use client";
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function Core({ lowPower }: { lowPower: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const orbit = useMemo(
    () =>
      Array.from({ length: 101 }, (_, i): [number, number, number] => {
        const t = (i / 100) * Math.PI * 2;
        return [Math.cos(t) * 2.7, Math.sin(t) * 0.58, Math.sin(t) * 1.2];
      }),
    [],
  );
  const points = useMemo(() => {
    const count = lowPower ? 55 : 110;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = i * 2.39996;
      const r = 2.5 + (i % 11) * 0.19;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = Math.sin(a) * (1.9 + (i % 7) * 0.12);
      positions[i * 3 + 2] = Math.sin(i * 3.17) * 1.6 - 1.3;
    }
    return positions;
  }, [lowPower]);
  useFrame((_state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += Math.min(delta, 0.04) * 0.055;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      0.2 + pointer.y * 0.08,
      2,
      delta,
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -0.25 + pointer.x * 0.06,
      2,
      delta,
    );
  });
  return (
    <group>
      <group ref={group} rotation={[0.2, 0.25, -0.25]}>
        <mesh>
          <torusKnotGeometry
            args={[1.16, 0.38, lowPower ? 144 : 240, lowPower ? 8 : 12, 2, 3]}
          />
          <meshBasicMaterial
            color="#81f1f2"
            wireframe
            transparent
            opacity={0.62}
          />
        </mesh>
        <mesh scale={0.988}>
          <torusKnotGeometry
            args={[1.16, 0.38, lowPower ? 100 : 170, 8, 2, 3]}
          />
          <meshBasicMaterial color="#111c34" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0.3, 0]}>
          <torusGeometry args={[1.94, 0.008, 6, 100]} />
          <meshBasicMaterial color="#656bae" transparent opacity={0.48} />
        </mesh>
        <Line
          points={orbit}
          color="#5484a4"
          lineWidth={0.6}
          transparent
          opacity={0.46}
        />
        <mesh position={[2.7, 0, 0]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#c1ffff" />
        </mesh>
      </group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#9bc7e7"
          size={0.014}
          sizeAttenuation
          transparent
          opacity={0.65}
        />
      </points>
    </group>
  );
}
function ContextGuard({ onFailure }: { onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const element = gl.domElement;
    const lost = (event: Event) => {
      event.preventDefault();
      onFailure();
    };
    element.addEventListener("webglcontextlost", lost);
    return () => element.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  return null;
}
export default function CoreScene({
  lowPower,
  active,
  onReady,
  onFailure,
}: {
  lowPower: boolean;
  active: boolean;
  onReady: () => void;
  onFailure: () => void;
}) {
  return (
    <Canvas
      dpr={lowPower ? 1 : [1, 1.5]}
      camera={{ position: [0, 0, 6.4], fov: 43 }}
      frameloop={active ? "always" : "demand"}
      gl={{ alpha: true, antialias: !lowPower, powerPreference: "low-power" }}
      onCreated={onReady}
      fallback={null}
    >
      <ContextGuard onFailure={onFailure} />
      <Core lowPower={lowPower} />
    </Canvas>
  );
}
