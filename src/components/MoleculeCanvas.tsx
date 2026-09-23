import { useEffect, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { Sparkles, Orbit } from 'lucide-react';

interface Atom {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  borderColor: string;
  label: string;
  element: string;
  atomicNum: number;
  mass: string;
  electrons: string;
}

interface Bond {
  from: number;
  to: number;
  type: 'single' | 'double' | 'resonant';
}

export const MoleculeCanvas = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMolecule, setActiveMolecule] = useState<'benzene' | 'water' | 'methane' | 'ethanol'>('benzene');
  const [isDragging, setIsDragging] = useState(false);

  // References for inertial physics
  const physicsRef = useRef({
    angleX: 0.2,
    angleY: 0.4,
    velX: 0,
    velY: 0.005, // gentle idle rotation
    lastMouseX: 0,
    lastMouseY: 0,
    isMouseDown: false,
    orbitTime: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const getMoleculeData = (type: 'benzene' | 'water' | 'methane' | 'ethanol') => {
      if (type === 'water') {
        const atoms: Atom[] = [
          {
            x: 0,
            y: -22,
            z: 0,
            radius: 26,
            color: '#F4A261',
            borderColor: '#E76F51',
            label: 'O',
            element: 'Oxygen',
            atomicNum: 8,
            mass: '15.999',
            electrons: '2, 6 (Valency 2)',
          },
          {
            x: -70,
            y: 38,
            z: -10,
            radius: 18,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
          {
            x: 70,
            y: 38,
            z: 10,
            radius: 18,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 0, to: 2, type: 'single' },
        ];
        return { atoms, bonds, scale: 1.15 };
      } else if (type === 'methane') {
        const s = 60;
        const atoms: Atom[] = [
          {
            x: 0,
            y: 0,
            z: 0,
            radius: 25,
            color: '#09284C',
            borderColor: '#164B73',
            label: 'C',
            element: 'Carbon',
            atomicNum: 6,
            mass: '12.011',
            electrons: 'sp³ Hybridized',
          },
          {
            x: s,
            y: s,
            z: s,
            radius: 16,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
          {
            x: -s,
            y: -s,
            z: s,
            radius: 16,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
          {
            x: -s,
            y: s,
            z: -s,
            radius: 16,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
          {
            x: s,
            y: -s,
            z: -s,
            radius: 16,
            color: '#F4A261',
            borderColor: '#E76F51',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 0, to: 2, type: 'single' },
          { from: 0, to: 3, type: 'single' },
          { from: 0, to: 4, type: 'single' },
        ];
        return { atoms, bonds, scale: 1.05 };
      } else if (type === 'ethanol') {
        const atoms: Atom[] = [
          { x: -50, y: 10, z: 0, radius: 22, color: '#09284C', borderColor: '#164B73', label: 'C', element: 'Carbon', atomicNum: 6, mass: '12.011', electrons: 'Methyl Carbon' },
          { x: 30, y: -10, z: 0, radius: 22, color: '#09284C', borderColor: '#164B73', label: 'C', element: 'Carbon', atomicNum: 6, mass: '12.011', electrons: 'Methylene Carbon' },
          { x: 85, y: 35, z: 10, radius: 24, color: '#F4A261', borderColor: '#E76F51', label: 'O', element: 'Oxygen', atomicNum: 8, mass: '15.999', electrons: 'Hydroxyl Oxygen' },
          { x: 135, y: 30, z: -10, radius: 15, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: 'Hydroxyl Proton' },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 1, to: 2, type: 'single' },
          { from: 2, to: 3, type: 'single' },
        ];
        return { atoms, bonds, scale: 1.0 };
      } else {
        // Benzene C6H6 with aromatic resonance
        const R = 78;
        const R_H = 124;
        const atoms: Atom[] = [];
        const bonds: Bond[] = [];

        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R * Math.cos(theta),
            y: R * Math.sin(theta),
            z: Math.sin(theta * 2) * 10,
            radius: 20,
            color: '#09284C',
            borderColor: '#164B73',
            label: 'C',
            element: 'Carbon',
            atomicNum: 6,
            mass: '12.011',
            electrons: 'sp² Delocalized π',
          });
        }

        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R_H * Math.cos(theta),
            y: R_H * Math.sin(theta),
            z: Math.sin(theta * 2) * 14,
            radius: 14,
            color: '#F4A261',
            borderColor: '#E76F51',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹ σ-bond',
          });
        }

        for (let i = 0; i < 6; i++) {
          bonds.push({
            from: i,
            to: (i + 1) % 6,
            type: 'resonant',
          });
          bonds.push({
            from: i,
            to: i + 6,
            type: 'single',
          });
        }

        return { atoms, bonds, scale: 0.95 };
      }
    };

    const { atoms, bonds, scale } = getMoleculeData(activeMolecule);

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const p = physicsRef.current;

      // Inertia & friction physics
      if (!p.isMouseDown) {
        p.velY *= 0.96;
        p.velX *= 0.96;
        p.angleY += p.velY + 0.004; // subtle idle spin
        p.angleX += p.velX;
      }

      p.orbitTime += 0.02;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 420;

      const cosX = Math.cos(p.angleX);
      const sinX = Math.sin(p.angleX);
      const cosY = Math.cos(p.angleY);
      const sinY = Math.sin(p.angleY);

      const projectedAtoms = atoms.map((atom) => {
        let x1 = atom.x * cosY + atom.z * sinY;
        let z1 = -atom.x * sinY + atom.z * cosY;

        let y2 = atom.y * cosX - z1 * sinX;
        let z2 = atom.y * sinX + z1 * cosX;

        const pScale = (fov / (fov + z2 + 220)) * scale;
        const px = centerX + x1 * pScale;
        const py = centerY + y2 * pScale;

        return {
          ...atom,
          px,
          py,
          pz: z2,
          pRadius: Math.max(9, atom.radius * pScale),
          opacity: Math.max(0.4, (z2 + 200) / 400),
        };
      });

      // 1. Quantum Orbital Rings
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 135 * scale, 55 * scale, p.angleY * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(244, 162, 97, 0.28)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 8]);
      ctx.stroke();

      // Orbiting Electron Dot
      const eTheta1 = p.orbitTime * 2;
      const ex1 = centerX + Math.cos(eTheta1) * 135 * scale * Math.cos(p.angleY * 0.7) - Math.sin(eTheta1) * 55 * scale * Math.sin(p.angleY * 0.7);
      const ey1 = centerY + Math.cos(eTheta1) * 135 * scale * Math.sin(p.angleY * 0.7) + Math.sin(eTheta1) * 55 * scale * Math.cos(p.angleY * 0.7);

      ctx.beginPath();
      ctx.arc(ex1, ey1, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#F4A261';
      ctx.shadowColor = '#F4A261';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();

      // 2. Bonds with volumetric cylinder look
      bonds.forEach((bond) => {
        const a1 = projectedAtoms[bond.from];
        const a2 = projectedAtoms[bond.to];
        if (!a1 || !a2) return;

        ctx.save();
        if (bond.type === 'resonant') {
          // Aromatic resonant bond (solid main line + glowing dashed internal line)
          ctx.beginPath();
          ctx.moveTo(a1.px, a1.py);
          ctx.lineTo(a2.px, a2.py);
          ctx.strokeStyle = 'rgba(9, 40, 76, 0.35)';
          ctx.lineWidth = 3.5;
          ctx.stroke();

          const dx = a2.px - a1.px;
          const dy = a2.py - a1.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const nx = (-dy / dist) * 4;
          const ny = (dx / dist) * 4;

          ctx.beginPath();
          ctx.setLineDash([3, 4]);
          ctx.moveTo(a1.px + nx, a1.py + ny);
          ctx.lineTo(a2.px + nx, a2.py + ny);
          ctx.strokeStyle = '#F4A261';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          const grad = ctx.createLinearGradient(a1.px, a1.py, a2.px, a2.py);
          grad.addColorStop(0, a1.color);
          grad.addColorStop(1, a2.color);

          ctx.beginPath();
          ctx.moveTo(a1.px, a1.py);
          ctx.lineTo(a2.px, a2.py);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 3.5;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        ctx.restore();
      });

      // 3. Render Atoms with 3D Specular Shading
      const sortedAtoms = [...projectedAtoms].sort((a, b) => a.pz - b.pz);

      sortedAtoms.forEach((atom) => {
        ctx.save();

        // 3D Depth Shadow
        ctx.shadowColor = 'rgba(9, 40, 76, 0.25)';
        ctx.shadowBlur = 14;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 6;

        // Spherical Radial Gradient
        const lightX = atom.px - atom.pRadius * 0.35;
        const lightY = atom.py - atom.pRadius * 0.35;
        const grad = ctx.createRadialGradient(
          lightX,
          lightY,
          atom.pRadius * 0.08,
          atom.px,
          atom.py,
          atom.pRadius
        );

        if (atom.label === 'H') {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.3, '#FDF1E7');
          grad.addColorStop(0.7, '#F4A261');
          grad.addColorStop(1, '#C85A17');
        } else if (atom.label === 'O') {
          grad.addColorStop(0, '#FFF5EB');
          grad.addColorStop(0.3, '#F4A261');
          grad.addColorStop(0.8, '#D95D39');
          grad.addColorStop(1, '#9C2A0A');
        } else {
          grad.addColorStop(0, '#3A7DAA');
          grad.addColorStop(0.4, '#164B73');
          grad.addColorStop(0.85, '#09284C');
          grad.addColorStop(1, '#041325');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(atom.px, atom.py, atom.pRadius, 0, Math.PI * 2);
        ctx.fill();

        // Specular highlight gleam
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(lightX, lightY, atom.pRadius * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.fill();

        // Rim Light
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Atom Symbol Label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${Math.max(10, Math.floor(atom.pRadius * 0.88))}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(atom.label, atom.px, atom.py + 0.5);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeMolecule]);

  // Inertial Mouse Drag Handlers
  const handleMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    const p = physicsRef.current;
    p.isMouseDown = true;
    p.lastMouseX = e.clientX;
    p.lastMouseY = e.clientY;
    p.velX = 0;
    p.velY = 0;
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    const p = physicsRef.current;
    if (p.isMouseDown) {
      const deltaX = e.clientX - p.lastMouseX;
      const deltaY = e.clientY - p.lastMouseY;
      p.velY = deltaX * 0.008;
      p.velX = -deltaY * 0.008;
      p.angleY += p.velY;
      p.angleX += p.velX;
      p.lastMouseX = e.clientX;
      p.lastMouseY = e.clientY;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    physicsRef.current.isMouseDown = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[490px] mx-auto select-none ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Glassmorphic Molecule Selector */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 glass-panel px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-brand-navy">
        <button
          type="button"
          onClick={() => setActiveMolecule('benzene')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'benzene'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-navy'
          }`}
        >
          C₆H₆ Benzene
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('water')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'water'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-navy'
          }`}
        >
          H₂O Water
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('methane')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'methane'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-navy'
          }`}
        >
          CH₄ Methane
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('ethanol')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'ethanol'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-navy'
          }`}
        >
          C₂H₅OH
        </button>
      </div>

      {/* Main Canvas with grab cursor */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      />

      {/* Luminous Floating Scientific Badges */}
      <div className="absolute top-14 left-4 glass-panel px-3 py-2 rounded-2xl shadow-md text-left animate-float">
        <div className="flex items-center gap-1.5 text-[10px] text-brand-orange font-mono uppercase font-bold">
          <Sparkles className="w-3 h-3" />
          <span>Resonance</span>
        </div>
        <div className="text-sm font-serif font-bold text-brand-navy">150 kJ/mol</div>
        <div className="text-[10px] text-brand-muted font-sans">Delocalized π Energy</div>
      </div>

      <div className="absolute bottom-12 right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-md text-left animate-float-delayed">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono uppercase font-bold">
          <Orbit className="w-3 h-3" />
          <span>Bond Angle</span>
        </div>
        <div className="text-sm font-serif font-bold text-brand-navy">104.5° vs 109.5°</div>
        <div className="text-[10px] text-brand-muted font-sans">Lone Pair Repulsion</div>
      </div>

      {/* Tactile Drag Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-brand-muted glass-panel px-3 py-0.5 rounded-full pointer-events-none opacity-80">
        Click and drag to spin 3D structure
      </div>
    </div>
  );
};
