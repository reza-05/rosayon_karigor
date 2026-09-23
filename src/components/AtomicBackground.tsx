import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  orbitRadius: number;
  electronAngle: number;
  electronSpeed: number;
  isAccent: boolean;
}

export const AtomicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // DPR scaling for crisp high-res displays (Retina, 4K)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      isDown: false,
      pulseRadius: 0,
    };

    // Color definitions aligned with Rosayon Karigor palette
    const colors = {
      ocean: 'rgba(22, 75, 115, 0.45)', // #164B73
      oceanGlow: 'rgba(22, 75, 115, 0.08)',
      electric: 'rgba(9, 87, 195, 0.55)', // #0957C3
      electricGlow: 'rgba(9, 87, 195, 0.1)',
      amber: 'rgba(244, 162, 97, 0.65)', // #F4A261
      amberGlow: 'rgba(244, 162, 97, 0.15)',
    };

    // Responsive particle count
    const getParticleCount = () => {
      const w = window.innerWidth;
      if (w > 1200) return 65;
      if (w > 768) return 40;
      return 24;
    };

    // Initialize particles
    const particles: Particle[] = [];
    const count = getParticleCount();

    for (let i = 0; i < count; i++) {
      const isAmber = Math.random() < 0.12; // 12% catalyst amber atoms
      const isElectric = !isAmber && Math.random() < 0.3; // 26% electric blue atoms

      const color = isAmber
        ? colors.amber
        : isElectric
        ? colors.electric
        : colors.ocean;

      const glowColor = isAmber
        ? colors.amberGlow
        : isElectric
        ? colors.electricGlow
        : colors.oceanGlow;

      const baseRadius = isAmber ? 2.5 : isElectric ? 2.2 : 1.7;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius,
        color,
        glowColor,
        orbitRadius: baseRadius * 4.5 + Math.random() * 4,
        electronAngle: Math.random() * Math.PI * 2,
        electronSpeed: (Math.random() * 0.02 + 0.015) * (Math.random() < 0.5 ? 1 : -1),
        isAccent: isAmber,
      });
    }

    // Handle mouse events globally so interactions work regardless of scrolling
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
      mouse.isDown = false;
    };

    const onPointerDown = () => {
      mouse.isDown = true;
      mouse.pulseRadius = 10;
    };

    const onPointerUp = () => {
      mouse.isDown = false;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('resize', onResize);

    // Max bonding distance
    const MAX_BOND_DISTANCE = 110;
    const MOUSE_INFLUENCE_RADIUS = 190;
    const MOUSE_CLUSTER_RADIUS = 320;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render mouse interactive energy field when active
      if (mouse.active) {
        // Ambient cursor electron halo
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.isDown ? 120 : 70
        );
        grad.addColorStop(0, mouse.isDown ? 'rgba(244, 162, 97, 0.12)' : 'rgba(9, 87, 195, 0.06)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.isDown ? 120 : 70, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing compression ring on click
        if (mouse.isDown) {
          mouse.pulseRadius = (mouse.pulseRadius + 1.2) % 45;
          ctx.strokeStyle = `rgba(244, 162, 97, ${0.35 * (1 - mouse.pulseRadius / 45)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, mouse.pulseRadius + 12, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // 1. Draw Chemical Covalent Bonds between proximate atoms
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_BOND_DISTANCE) {
            const alpha = (1 - dist / MAX_BOND_DISTANCE) * 0.22;
            ctx.strokeStyle = `rgba(22, 75, 115, ${alpha})`;
            ctx.lineWidth = 0.8;

            if (dist < 42) {
              // Double bond simulation for closely coupled atoms
              const angle = Math.atan2(dy, dx);
              const offsetX = Math.sin(angle) * 1.5;
              const offsetY = -Math.cos(angle) * 1.5;

              ctx.beginPath();
              ctx.moveTo(p1.x + offsetX, p1.y + offsetY);
              ctx.lineTo(p2.x + offsetX, p2.y + offsetY);
              ctx.stroke();

              ctx.beginPath();
              ctx.moveTo(p1.x - offsetX, p1.y - offsetY);
              ctx.lineTo(p2.x - offsetX, p2.y - offsetY);
              ctx.stroke();
            } else {
              // Single covalent bond line
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // 2. Update & Draw Atoms with Quantum Orbitals
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal Brownian drift
        p.x += p.vx;
        p.y += p.vy;

        // Friction to prevent infinite acceleration from mouse forces
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Maintain minimum gentle drift
        const speed = Math.hypot(p.vx, p.vy);
        if (speed < 0.2) {
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
        }

        // Boundary wrapping with margin
        const margin = 20;
        if (p.x < -margin) p.x = width + margin;
        else if (p.x > width + margin) p.x = -margin;
        if (p.y < -margin) p.y = height + margin;
        else if (p.y > height + margin) p.y = -margin;

        // --- Mouse Interaction Physics ("ghurbe firbe, ekjai gai hbe") ---
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (mouse.isDown && dist < MOUSE_CLUSTER_RADIUS) {
            // "ekjai gai hbe" (Cluster together): Strong centripetal gravity pull
            const pullForce = (1 - dist / MOUSE_CLUSTER_RADIUS) * 0.45;
            p.vx += (dx / dist) * pullForce;
            p.vy += (dy / dist) * pullForce;

            // Add tangential swirl while clustering
            p.vx += (-dy / dist) * pullForce * 0.6;
            p.vy += (dx / dist) * pullForce * 0.6;
          } else if (dist < MOUSE_INFLUENCE_RADIUS) {
            // "ghurbe firbe" (Swirl around cursor):
            // Perpendicular vortex force creates smooth orbital circulation around the cursor
            const influence = 1 - dist / MOUSE_INFLUENCE_RADIUS;
            const swirlStrength = influence * 0.32;
            const gentleAttract = influence * 0.08;

            p.vx += (-dy / dist) * swirlStrength + (dx / dist) * gentleAttract;
            p.vy += (dx / dist) * swirlStrength + (dy / dist) * gentleAttract;
          }
        }

        // --- Render Atomic Core ---
        // Outer valence halo
        ctx.fillStyle = p.glowColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius * 3.8, 0, Math.PI * 2);
        ctx.fill();

        // Inner nucleus
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Orbital Ring path
        ctx.strokeStyle = p.glowColor;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Orbiting Valence Electron
        p.electronAngle += p.electronSpeed;
        const electronX = p.x + Math.cos(p.electronAngle) * p.orbitRadius;
        const electronY = p.y + Math.sin(p.electronAngle) * p.orbitRadius;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(electronX, electronY, 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
    />
  );
};
