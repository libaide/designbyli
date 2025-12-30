"use client";

/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const AntigravityInner = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = "#FF9FFC",
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = "capsule",
  fieldStrength = 10,

  // Fade-in
  fadeIn = true,
  fadeInDelay = 0.15,     // seconds
  fadeInDuration = 1.6,   // seconds
  fadeInEase = 2.4,       // ease-out strength
}) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // Fade state: reset reliably on mount
  const fadeRef = useRef({
    enabled: false,
    start: null, // clock time when fade begins
    value: 0,
  });

  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(0);
  const virtualMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  fadeRef.current.enabled = Boolean(fadeIn) && !reduce;
  fadeRef.current.start = null;
  fadeRef.current.value = fadeRef.current.enabled ? 0 : 1;

  if (materialRef.current) {
    materialRef.current.transparent = true;
    materialRef.current.depthWrite = false;
    materialRef.current.opacity = fadeRef.current.enabled ? 0 : 1;
    materialRef.current.needsUpdate = true;
  }

  console.log("fade enabled:", fadeRef.current.enabled); // ✅ here
}, [fadeIn]);


  const particles = useMemo(() => {
    const temp = [];
    const width = viewport.width || 100;
    const height = viewport.height || 100;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;

      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 20;

      const randomRadiusOffset = (Math.random() - 0.5) * 2;

      temp.push({
        t,
        speed,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        randomRadiusOffset,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // ---- Fade-in (clock-based, but start is reset on first frame) ----
    if (fadeRef.current.enabled) {
      if (fadeRef.current.start === null) {
        fadeRef.current.start = state.clock.getElapsedTime();
      }

      const elapsed =
        state.clock.getElapsedTime() - fadeRef.current.start - fadeInDelay;

      const raw = Math.min(
        1,
        Math.max(0, elapsed / Math.max(0.0001, fadeInDuration))
      );

      // Ease-out: 1 - (1 - t)^ease
      const eased = 1 - Math.pow(1 - raw, fadeInEase);

      fadeRef.current.value = eased;

      if (materialRef.current) materialRef.current.opacity = eased;
    } else {
      fadeRef.current.value = 1;
      if (materialRef.current) materialRef.current.opacity = 1;
    }

    const { viewport: v, pointer: m } = state;

    // pointer values come from Canvas eventSource (we set it below)
    const mouseDist = Math.sqrt(
      (m.x - lastMousePos.current.x) ** 2 + (m.y - lastMousePos.current.y) ** 2
    );

    if (mouseDist > 0.001) {
      lastMouseMoveTime.current = Date.now();
      lastMousePos.current = { x: m.x, y: m.y };
    }

    let destX = (m.x * v.width) / 2;
    let destY = (m.y * v.height) / 2;

    if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
      const time = state.clock.getElapsedTime();
      destX = Math.sin(time * 0.5) * (v.width / 4);
      destY = Math.cos(time) * (v.height / 4);
    }

    // smooth cursor
    const smoothFactor = 0.06;
    virtualMouse.current.x += (destX - virtualMouse.current.x) * smoothFactor;
    virtualMouse.current.y += (destY - virtualMouse.current.y) * smoothFactor;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;

    const globalRotation = state.clock.getElapsedTime() * rotationSpeed;

    particles.forEach((particle, i) => {
      let { t, speed, mx, my, mz, cz, randomRadiusOffset } = particle;
      t = particle.t += speed / 2;

      const projectionFactor = 1 - cz / 50;
      const projectedTargetX = targetX * projectionFactor;
      const projectedTargetY = targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetPos = { x: mx, y: my, z: mz * depthFactor };

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation;

        const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));
        const currentRingRadius = ringRadius + wave + deviation;

        targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
        targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
        targetPos.z =
          mz * depthFactor + Math.sin(t) * (waveAmplitude * depthFactor);
      }

      particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
      particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
      particle.cz += (targetPos.z - particle.cz) * lerpSpeed;

      dummy.position.set(particle.cx, particle.cy, particle.cz);
      dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
      dummy.rotateX(Math.PI / 2);

      const currentDistToMouse = Math.sqrt(
        (particle.cx - projectedTargetX) ** 2 + (particle.cy - projectedTargetY) ** 2
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;
      scaleFactor = Math.max(0, Math.min(1, scaleFactor));

      // subtle "settle" during fade
      const fadeScale = 0.85 + fadeRef.current.value * 0.15;

      const finalScale =
        scaleFactor *
        (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) *
        particleSize *
        fadeScale;

      dummy.scale.set(finalScale, finalScale, finalScale);
      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === "capsule" && (
        <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      )}
      {particleShape === "sphere" && <sphereGeometry args={[0.2, 16, 16]} />}
      {particleShape === "box" && <boxGeometry args={[0.3, 0.3, 0.3]} />}
      {particleShape === "tetrahedron" && (
        <tetrahedronGeometry args={[0.3]} />
      )}
      <meshBasicMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={0}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export default function AntigravityCanvas({
  eventSourceId = "hero", // 👈 read pointer from this element
  ...props
}) {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    const el = document.getElementById(eventSourceId) || document.body;
    setEventSource(el);
  }, [eventSourceId]);

  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 35 }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }} // click-through
      dpr={[1, 1.5]}
      eventSource={eventSource || undefined}
      eventPrefix="client"
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
}
