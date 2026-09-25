import React, { useEffect, useRef, useState, useCallback } from 'react';

export interface MethodStep {
  num: string;
  symbol: string;
  orbital: string;
  energyState: string;
  title: string;
  titleBangla: string;
  color: string;
  shortDesc: string;
  shortDescBangla: string;
  details: string;
}

interface AtomicMethod3DCanvasProps {
  steps: MethodStep[];
  activeStep: number;
  onSelectStep: (index: number) => void;
  className?: string;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface ProjectedPoint {
  px: number;
  py: number;
  pz: number;
  scale: number;
}

// Base 3D stations arranged harmoniously on valence shells (Radius ~ 210)
const station3DCoords: Point3D[] = [
  { x: -185, y: -35, z: 80 },  // 01 Ud (Understand) - Left / Front
  { x: -90, y: -175, z: -85 },  // 02 Vz (Visualize) - Top-Left / Back
  { x: 105, y: -165, z: 75 },  // 03 Cn (Connect) - Top-Right / Front
  { x: 195, y: 35, z: -80 },   // 04 Pr (Practice) - Right / Back
  { x: 0, y: 190, z: 85 },     // 05 Ms (Master) - Bottom / Front
];

// 3D Orbital Rings Configuration (Radius, Inclination angles)
const ringConfigs = [
  { radius: 230, incX: 0.58, incY: 0.38, color: '#0284c7', speed: 1.2 },  // Ring 1 (Sky)
  { radius: 230, incX: -0.58, incY: -0.42, color: '#8b5cf6', speed: -1.0 }, // Ring 2 (Violet)
  { radius: 215, incX: 1.45, incY: 0.22, color: '#0d9488', speed: 1.4 },  // Ring 3 (Teal - polar)
  { radius: 245, incX: 0.22, incY: 1.25, color: '#f59e0b', speed: -0.8 },  // Ring 4 (Amber - equatorial)
];

// 3D Nucleus Particles (Protons & Neutrons clustered at origin)
const nucleusParticles: Array<Point3D & { color: string; radius: number }> = [
  { x: -14, y: 8, z: -7, color: '#F59E0B', radius: 6 },
  { x: 13, y: -7, z: 9, color: '#F59E0B', radius: 6 },
  { x: -6, y: -13, z: 11, color: '#F59E0B', radius: 5.5 },
  { x: 9, y: 11, z: -6, color: '#0EA5E9', radius: 6.5 },
  { x: -11, y: -8, z: -9, color: '#0EA5E9', radius: 6 },
  { x: 7, y: -11, z: -11, color: '#10B981', radius: 5.5 },
  { x: 0, y: 14, z: 13, color: '#8B5CF6', radius: 5 },
  { x: -3, y: 2, z: -14, color: '#38BDF8', radius: 6 },
];

// Helper to project 3D coordinate to 2D screen coordinate
function project3D(
  pt: Point3D,
  cx: number,
  cy: number,
  cosY: number,
  sinY: number,
  cosX: number,
  sinX: number,
  fov: number,
  masterScale: number
): ProjectedPoint {
  // Rotate around Y-axis
  const x1 = pt.x * cosY + pt.z * sinY;
  const z1 = -pt.x * sinY + pt.z * cosY;

  // Rotate around X-axis
  const y2 = pt.y * cosX - z1 * sinX;
  const z2 = pt.y * sinX + z1 * cosX;

  // Perspective Projection
  const pScale = (fov / (fov + z2 + 300)) * masterScale;
  const px = cx + x1 * pScale;
  const py = cy + y2 * pScale;

  return { px, py, pz: z2, scale: pScale };
}

// Precalculate 3D orbital rings sampled points
const ringSamplePoints: Point3D[][] = ringConfigs.map((rc) => {
  const points: Point3D[] = [];
  const numPoints = 80;
  const cosIncX = Math.cos(rc.incX);
  const sinIncX = Math.sin(rc.incX);
  const cosIncY = Math.cos(rc.incY);
  const sinIncY = Math.sin(rc.incY);

  for (let i = 0; i < numPoints; i++) {
    const phi = (i / numPoints) * Math.PI * 2;
    const rx = rc.radius * Math.cos(phi);
    const ry = rc.radius * Math.sin(phi);

    // Apply ring's fixed inclination
    const y1 = ry * cosIncX;
    const z1 = ry * sinIncX;

    const x2 = rx * cosIncY + z1 * sinIncY;
    const z2 = -rx * sinIncY + z1 * cosIncY;

    points.push({ x: x2, y: y1, z: z2 });
  }
  return points;
});

// Helper to render a 3D Station Node Sphere & Badges
function renderStationNode(
  ctx: CanvasRenderingContext2D,
  st: ProjectedPoint & { radius: number; stepIndex: number; stepData: MethodStep },
  isSelected: boolean,
  isHovered: boolean
) {
  ctx.save();
  const { px, py, radius, scale, stepData } = st;

  // Depth Alpha factor
  const depthAlpha = Math.max(0.45, Math.min(1.0, (st.pz + 280) / 520));
  ctx.globalAlpha = depthAlpha;

  // 1. Outer Orbiting Ring & Active Aura
  if (isSelected || isHovered) {
    ctx.beginPath();
    ctx.arc(px, py, radius + 10 * scale, 0, Math.PI * 2);
    ctx.strokeStyle = stepData.color;
    ctx.lineWidth = 2 * scale;
    ctx.setLineDash([4, 4]);
    ctx.stroke();

    // Pulsing outer halo
    const haloGrad = ctx.createRadialGradient(px, py, radius, px, py, radius + 22 * scale);
    haloGrad.addColorStop(0, `${stepData.color}66`);
    haloGrad.addColorStop(1, `${stepData.color}00`);
    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(px, py, radius + 22 * scale, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. 3D Spherical Node Body with Specular Highlight
  const sphereRadius = radius;
  const lightX = px - sphereRadius * 0.35;
  const lightY = py - sphereRadius * 0.35;

  const sphereGrad = ctx.createRadialGradient(
    lightX,
    lightY,
    sphereRadius * 0.08,
    px,
    py,
    sphereRadius
  );

  if (isSelected) {
    sphereGrad.addColorStop(0, '#FFFFFF');
    sphereGrad.addColorStop(0.25, stepData.color);
    sphereGrad.addColorStop(0.85, '#0A2540');
    sphereGrad.addColorStop(1, '#020617');
  } else {
    sphereGrad.addColorStop(0, '#FFFFFF');
    sphereGrad.addColorStop(0.35, '#F8FAFC');
    sphereGrad.addColorStop(0.8, '#E2E8F0');
    sphereGrad.addColorStop(1, '#94A3B8');
  }

  ctx.beginPath();
  ctx.arc(px, py, sphereRadius, 0, Math.PI * 2);
  ctx.fillStyle = sphereGrad;
  ctx.shadowColor = isSelected ? stepData.color : 'rgba(15, 23, 42, 0.25)';
  ctx.shadowBlur = isSelected ? 16 : 8;
  ctx.shadowOffsetY = 4 * scale;
  ctx.fill();

  // Node Border
  ctx.strokeStyle = isSelected ? '#FFFFFF' : stepData.color;
  ctx.lineWidth = (isSelected ? 2.8 : 2.0) * scale;
  ctx.stroke();

  // 3. Chemical Symbol (Ud, Vz, Cn, Pr, Ms)
  ctx.fillStyle = isSelected ? '#FFFFFF' : '#0F172A';
  ctx.font = `bold ${Math.max(10, 15 * scale)}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = isSelected ? 'rgba(0,0,0,0.6)' : 'transparent';
  ctx.shadowBlur = 4;
  ctx.fillText(stepData.symbol, px, py - 3 * scale);

  // 4. Atomic Number Subscript (01, 02, etc.)
  ctx.fillStyle = isSelected ? '#38BDF8' : stepData.color;
  ctx.font = `bold ${Math.max(7, 9 * scale)}px monospace`;
  ctx.textAlign = 'left';
  ctx.fillText(stepData.num, px + 12 * scale, py - 8 * scale);

  // 5. Bengali Title Label Pill Underneath
  const pillW = Math.max(68, 86 * scale);
  const pillH = Math.max(18, 22 * scale);
  const pillY = py + sphereRadius + 6 * scale;
  const pillX = px - pillW / 2;

  ctx.fillStyle = isSelected ? stepData.color : '#FFFFFF';
  ctx.strokeStyle = isSelected ? '#FFFFFF' : '#E2E8F0';
  ctx.lineWidth = 1.2 * scale;
  ctx.shadowColor = 'rgba(15, 23, 42, 0.12)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, pillH / 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = isSelected ? '#FFFFFF' : '#1E293B';
  ctx.font = `bold ${Math.max(8.5, 10.5 * scale)}px system-ui, -apple-system, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'transparent';
  ctx.fillText(stepData.titleBangla, px, pillY + pillH / 2);

  ctx.restore();
}

export const AtomicMethod3DCanvas: React.FC<AtomicMethod3DCanvasProps> = ({
  steps,
  activeStep,
  onSelectStep,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Keep references to current props for continuous animation loop
  const stepsRef = useRef(steps);
  const activeStepRef = useRef(activeStep);
  const hoveredIndexRef = useRef<number | null>(hoveredIndex);

  useEffect(() => {
    stepsRef.current = steps;
    activeStepRef.current = activeStep;
    hoveredIndexRef.current = hoveredIndex;
  }, [steps, activeStep, hoveredIndex]);

  // Physics state for 3D rotation & inertia
  const physicsRef = useRef({
    angleX: 0.18,
    angleY: -0.25,
    velX: 0,
    velY: 0.0035,
    targetAngleY: null as number | null,
    targetAngleX: null as number | null,
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    hasMoved: false,
    animTime: 0,
  });

  // Track projected positions for click/hover collision detection
  const projectedStationsRef = useRef<Array<{ px: number; py: number; radius: number; pz: number }>>([]);

  // Smoothly rotate to bring the active station toward the front view
  const alignToStation = useCallback((index: number) => {
    const coord = station3DCoords[index];
    if (!coord) return;
    const targetY = -Math.atan2(coord.x, coord.z);
    physicsRef.current.targetAngleY = targetY;
    physicsRef.current.targetAngleX = 0.15;
  }, []);

  // Update orientation when activeStep changes from outside
  useEffect(() => {
    alignToStation(activeStep);
  }, [activeStep, alignToStation]);

  // Main 3D Rendering & Animation Loop (Mounts once, runs continuously)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const render = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width === 0 || height === 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      const p = physicsRef.current;
      p.animTime += 0.016;

      const currentSteps = stepsRef.current;
      const currentActive = activeStepRef.current;
      const currentHovered = hoveredIndexRef.current;

      // Inertia & Physics / Smooth Alignment
      if (p.isDragging) {
        // Dragging handled by pointer move
      } else if (p.targetAngleY !== null && p.targetAngleX !== null) {
        const diffY = p.targetAngleY - p.angleY;
        const diffX = p.targetAngleX - p.angleX;
        p.angleY += diffY * 0.06;
        p.angleX += diffX * 0.06;

        if (Math.abs(diffY) < 0.003 && Math.abs(diffX) < 0.003) {
          p.targetAngleY = null;
          p.targetAngleX = null;
        }
      } else {
        p.velY *= 0.95;
        p.velX *= 0.95;
        p.angleY += p.velY + 0.0035;
        p.angleX += p.velX;
        p.angleX = Math.max(-0.65, Math.min(0.65, p.angleX));
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 520;

      const minDim = Math.min(width, height);
      const masterScale = Math.min(1.08, Math.max(0.65, minDim / 480));

      const cosY = Math.cos(p.angleY);
      const sinY = Math.sin(p.angleY);
      const cosX = Math.cos(p.angleX);
      const sinX = Math.sin(p.angleX);

      // 1. Project 5 Stations to Screen
      const projectedStations = station3DCoords.map((coord, idx) => {
        const proj = project3D(coord, cx, cy, cosY, sinY, cosX, sinX, fov, masterScale);
        const baseRadius = 32;
        const pRadius = Math.max(18, baseRadius * proj.scale);
        return {
          ...proj,
          radius: pRadius,
          stepIndex: idx,
          stepData: currentSteps[idx],
        };
      });
      projectedStationsRef.current = projectedStations.map((ps) => ({
        px: ps.px,
        py: ps.py,
        radius: ps.radius,
        pz: ps.pz,
      }));

      // 2. Project 3D Orbital Rings Points
      const projectedRings = ringSamplePoints.map((pts) =>
        pts.map((pt) => project3D(pt, cx, cy, cosY, sinY, cosX, sinX, fov, masterScale))
      );

      // --- PASS 1: BACK ORBITAL RING SEGMENTS (pz < 0) ---
      projectedRings.forEach((ringPts, rIdx) => {
        const rc = ringConfigs[rIdx];
        ctx.save();
        ctx.strokeStyle = rc.color;
        ctx.setLineDash([4, 6]);

        for (let i = 0; i < ringPts.length; i++) {
          const p1 = ringPts[i];
          const p2 = ringPts[(i + 1) % ringPts.length];

          if (p1.pz < 0 || p2.pz < 0) {
            const avgPz = (p1.pz + p2.pz) / 2;
            const alpha = Math.max(0.12, Math.min(0.35, (avgPz + 240) / 480));
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.3;

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
        ctx.restore();
      });

      // --- PASS 2: 3D COVALENT REACTION BONDS (1 -> 2 -> 3 -> 4 -> 5 -> 1) ---
      for (let i = 0; i < 5; i++) {
        const s1 = station3DCoords[i];
        const s2 = station3DCoords[(i + 1) % 5];
        const color1 = currentSteps[i].color;
        const color2 = currentSteps[(i + 1) % 5].color;

        const mx = (s1.x + s2.x) / 2;
        const my = (s1.y + s2.y) / 2;
        const mz = (s1.z + s2.z) / 2;
        const mLen = Math.sqrt(mx * mx + my * my + mz * mz) || 1;
        const pushR = 240;
        const cx3 = (mx / mLen) * pushR;
        const cy3 = (my / mLen) * pushR;
        const cz3 = (mz / mLen) * pushR;

        const curvePoints: ProjectedPoint[] = [];
        const stepsCount = 18;
        for (let s = 0; s <= stepsCount; s++) {
          const t = s / stepsCount;
          const it = 1 - t;
          const bx = it * it * s1.x + 2 * it * t * cx3 + t * t * s2.x;
          const by = it * it * s1.y + 2 * it * t * cy3 + t * t * s2.y;
          const bz = it * it * s1.z + 2 * it * t * cz3 + t * t * s2.z;
          curvePoints.push(project3D({ x: bx, y: by, z: bz }, cx, cy, cosY, sinY, cosX, sinX, fov, masterScale));
        }

        ctx.save();
        ctx.setLineDash([3, 4]);

        for (let s = 0; s < curvePoints.length - 1; s++) {
          const cp1 = curvePoints[s];
          const cp2 = curvePoints[s + 1];
          const avgZ = (cp1.pz + cp2.pz) / 2;
          const bondAlpha = Math.max(0.18, Math.min(0.65, (avgZ + 250) / 500));

          ctx.strokeStyle = s < stepsCount / 2 ? color1 : color2;
          ctx.globalAlpha = bondAlpha;
          ctx.lineWidth = Math.max(1.2, 2.2 * cp1.scale);

          ctx.beginPath();
          ctx.moveTo(cp1.px, cp1.py);
          ctx.lineTo(cp2.px, cp2.py);
          ctx.stroke();
        }

        // Flowing Valence Energy Packet along the 3D bond
        const flowT = (p.animTime * 0.45 + i * 0.2) % 1;
        const flowIdx = Math.floor(flowT * stepsCount);
        const flowPt = curvePoints[flowIdx] || curvePoints[0];

        ctx.beginPath();
        ctx.arc(flowPt.px, flowPt.py, 3.5 * flowPt.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = color1;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = Math.max(0.4, (flowPt.pz + 250) / 500);
        ctx.fill();

        ctx.restore();
      }

      // --- PASS 3: BACK STATION NODES (pz < 0) ---
      const backStations = projectedStations.filter((s) => s.pz < 0);
      backStations.forEach((st) => {
        renderStationNode(ctx, st, currentActive === st.stepIndex, currentHovered === st.stepIndex);
      });

      // --- PASS 4: CENTRAL ATOMIC NUCLEUS (Z = 0) ---
      ctx.save();

      // Outer Pulsing Core Wave Aura
      const corePulse = 1 + Math.sin(p.animTime * 2.5) * 0.08;
      const coreRadius = 48 * masterScale * corePulse;
      const coreGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, coreRadius);
      coreGrad.addColorStop(0, 'rgba(14, 165, 233, 0.35)');
      coreGrad.addColorStop(0.55, 'rgba(14, 165, 233, 0.10)');
      coreGrad.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Central Quantum Core Sphere
      const nucSphereGrad = ctx.createRadialGradient(
        cx - 8 * masterScale,
        cy - 8 * masterScale,
        2,
        cx,
        cy,
        34 * masterScale
      );
      nucSphereGrad.addColorStop(0, '#1E293B');
      nucSphereGrad.addColorStop(0.7, '#0A2540');
      nucSphereGrad.addColorStop(1, '#020617');

      ctx.beginPath();
      ctx.arc(cx, cy, 32 * masterScale, 0, Math.PI * 2);
      ctx.fillStyle = nucSphereGrad;
      ctx.shadowColor = '#0EA5E9';
      ctx.shadowBlur = 14;
      ctx.fill();

      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2 * masterScale;
      ctx.stroke();

      // 3D Protons & Neutrons Cluster inside Nucleus
      const projNucleus = nucleusParticles.map((np) => ({
        ...project3D(np, cx, cy, cosY, sinY, cosX, sinX, fov, masterScale),
        color: np.color,
        radius: np.radius * masterScale,
      }));

      projNucleus.sort((a, b) => a.pz - b.pz);
      projNucleus.forEach((np) => {
        const pGrad = ctx.createRadialGradient(
          np.px - np.radius * 0.3,
          np.py - np.radius * 0.3,
          1,
          np.px,
          np.py,
          np.radius
        );
        pGrad.addColorStop(0, '#FFFFFF');
        pGrad.addColorStop(0.4, np.color);
        pGrad.addColorStop(1, '#020617');

        ctx.beginPath();
        ctx.arc(np.px, np.py, np.radius, 0, Math.PI * 2);
        ctx.fillStyle = pGrad;
        ctx.shadowColor = np.color;
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      // Core Nucleus Typography
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.max(8, 10 * masterScale)}px system-ui, -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 4;
      ctx.fillText('কারিগর CORE', cx, cy + 44 * masterScale);

      ctx.fillStyle = '#94A3B8';
      ctx.font = `600 ${Math.max(7, 8 * masterScale)}px monospace`;
      ctx.fillText('Z=5 • PEDAGOGY', cx, cy + 55 * masterScale);
      ctx.restore();

      // --- PASS 5: ACTIVE 3D RESONANCE LASER BEAM (Nucleus -> Active Station) ---
      const activeStationProj = projectedStations[currentActive];
      if (activeStationProj) {
        ctx.save();
        const activeColor = currentSteps[currentActive].color;

        ctx.strokeStyle = activeColor;
        ctx.lineWidth = Math.max(2, 3.5 * activeStationProj.scale);
        ctx.setLineDash([5, 5]);
        ctx.shadowColor = activeColor;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.85;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(activeStationProj.px, activeStationProj.py);
        ctx.stroke();

        const numPhotons = 3;
        for (let i = 0; i < numPhotons; i++) {
          const pt = ((p.animTime * 1.5 + i / numPhotons) % 1);
          const px = cx + (activeStationProj.px - cx) * pt;
          const py = cy + (activeStationProj.py - cy) * pt;

          ctx.beginPath();
          ctx.arc(px, py, 3.5 * activeStationProj.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
        ctx.restore();
      }

      // --- PASS 6: FRONT ORBITAL RING SEGMENTS (pz >= 0) ---
      projectedRings.forEach((ringPts, rIdx) => {
        const rc = ringConfigs[rIdx];
        ctx.save();
        ctx.strokeStyle = rc.color;
        ctx.setLineDash([5, 7]);

        for (let i = 0; i < ringPts.length; i++) {
          const p1 = ringPts[i];
          const p2 = ringPts[(i + 1) % ringPts.length];

          if (p1.pz >= 0 && p2.pz >= 0) {
            const avgPz = (p1.pz + p2.pz) / 2;
            const alpha = Math.max(0.4, Math.min(0.85, (avgPz + 240) / 480));
            ctx.globalAlpha = alpha;
            ctx.lineWidth = Math.max(1.5, 2.2 * p1.scale);

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }

        // Orbiting Electron on this ring
        const eTheta = (p.animTime * rc.speed * 0.8) % (Math.PI * 2);
        const normTheta = eTheta < 0 ? eTheta + Math.PI * 2 : eTheta;
        const ptIdx = Math.floor((normTheta / (Math.PI * 2)) * ringPts.length);
        const ePt = ringPts[ptIdx] || ringPts[0];

        if (ePt.pz >= 0) {
          ctx.beginPath();
          ctx.arc(ePt.px, ePt.py, Math.max(3, 4.5 * ePt.scale), 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = rc.color;
          ctx.shadowBlur = 10;
          ctx.globalAlpha = 0.95;
          ctx.fill();
        }

        ctx.restore();
      });

      // --- PASS 7: FRONT STATION NODES (pz >= 0) ---
      const frontStations = projectedStations.filter((s) => s.pz >= 0);
      frontStations.forEach((st) => {
        renderStationNode(ctx, st, currentActive === st.stepIndex, currentHovered === st.stepIndex);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = physicsRef.current;
    p.isDragging = true;
    p.hasMoved = false;
    p.startX = e.clientX;
    p.startY = e.clientY;
    p.lastX = e.clientX;
    p.lastY = e.clientY;
    p.targetAngleY = null;
    p.targetAngleX = null;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = physicsRef.current;

    if (p.isDragging) {
      const dx = e.clientX - p.lastX;
      const dy = e.clientY - p.lastY;

      if (Math.abs(e.clientX - p.startX) > 4 || Math.abs(e.clientY - p.startY) > 4) {
        p.hasMoved = true;
      }

      p.angleY += dx * 0.006;
      p.angleX -= dy * 0.006;
      p.angleX = Math.max(-0.65, Math.min(0.65, p.angleX));

      p.velY = dx * 0.005;
      p.velX = -dy * 0.005;

      p.lastX = e.clientX;
      p.lastY = e.clientY;
    } else if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let foundIdx: number | null = null;
      for (let i = 0; i < projectedStationsRef.current.length; i++) {
        const ps = projectedStationsRef.current[i];
        const dist = Math.hypot(mouseX - ps.px, mouseY - ps.py);
        if (dist <= ps.radius + 12) {
          foundIdx = i;
          break;
        }
      }
      setHoveredIndex(foundIdx);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = physicsRef.current;
    p.isDragging = false;

    if (!p.hasMoved && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < projectedStationsRef.current.length; i++) {
        const ps = projectedStationsRef.current[i];
        const dist = Math.hypot(clickX - ps.px, clickY - ps.py);
        if (dist <= ps.radius + 14) {
          onSelectStep(i);
          alignToStation(i);
          break;
        }
      }
    }

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if not captured
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[460px] lg:h-[520px] select-none touch-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          physicsRef.current.isDragging = false;
          setHoveredIndex(null);
        }}
        className={`w-full h-full block ${
          hoveredIndex !== null ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
        }`}
      />
    </div>
  );
};
