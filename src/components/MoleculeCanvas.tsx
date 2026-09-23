import React, { useEffect, useRef, useState } from 'react';

interface Atom {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  borderColor: string;
  label: string;
  element: string;
}

interface Bond {
  from: number;
  to: number;
  type: 'single' | 'double';
}

export const MoleculeCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMolecule, setActiveMolecule] = useState<'benzene' | 'water' | 'methane'>('benzene');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.2;
    let angleY = 0.3;
    let targetAngleX = 0.2;
    let targetAngleY = 0.3;

    // Molecular model structures
    const getMoleculeData = (type: 'benzene' | 'water' | 'methane') => {
      if (type === 'water') {
        // H2O
        const atoms: Atom[] = [
          { x: 0, y: -20, z: 0, radius: 24, color: '#F4A261', borderColor: '#E76F51', label: 'O', element: 'Oxygen' },
          { x: -65, y: 35, z: -15, radius: 16, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen' },
          { x: 65, y: 35, z: 15, radius: 16, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen' },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 0, to: 2, type: 'single' },
        ];
        return { atoms, bonds, scale: 1.2 };
      } else if (type === 'methane') {
        // CH4 Tetrahedron
        const s = 55;
        const atoms: Atom[] = [
          { x: 0, y: 0, z: 0, radius: 22, color: '#09284C', borderColor: '#164B73', label: 'C', element: 'Carbon' },
          { x: s, y: s, z: s, radius: 14, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen' },
          { x: -s, y: -s, z: s, radius: 14, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen' },
          { x: -s, y: s, z: -s, radius: 14, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen' },
          { x: s, y: -s, z: -s, radius: 14, color: '#F4A261', borderColor: '#E76F51', label: 'H', element: 'Hydrogen' },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 0, to: 2, type: 'single' },
          { from: 0, to: 3, type: 'single' },
          { from: 0, to: 4, type: 'single' },
        ];
        return { atoms, bonds, scale: 1.1 };
      } else {
        // Benzene C6H6 (Hexagonal ring)
        const R = 75;
        const R_H = 120;
        const atoms: Atom[] = [];
        const bonds: Bond[] = [];

        // 6 Carbons
        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R * Math.cos(theta),
            y: R * Math.sin(theta),
            z: Math.sin(theta * 2) * 12,
            radius: 18,
            color: i % 2 === 0 ? '#09284C' : '#164B73',
            borderColor: '#F7F5EF',
            label: 'C',
            element: 'Carbon',
          });
        }

        // 6 Hydrogens
        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R_H * Math.cos(theta),
            y: R_H * Math.sin(theta),
            z: Math.sin(theta * 2) * 18,
            radius: 12,
            color: '#F4A261',
            borderColor: '#E76F51',
            label: 'H',
            element: 'Hydrogen',
          });
        }

        // Carbon ring bonds
        for (let i = 0; i < 6; i++) {
          bonds.push({
            from: i,
            to: (i + 1) % 6,
            type: i % 2 === 0 ? 'double' : 'single',
          });
        }

        // C-H bonds
        for (let i = 0; i < 6; i++) {
          bonds.push({
            from: i,
            to: i + 6,
            type: 'single',
          });
        }

        return { atoms, bonds, scale: 1.0 };
      }
    };

    let { atoms, bonds, scale } = getMoleculeData(activeMolecule);

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

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = mouseX * 2.5;
      targetAngleX = -mouseY * 2.5;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Render loop
    const render = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Auto rotation
      targetAngleY += 0.006;
      angleX += (targetAngleX - angleX) * 0.06;
      angleY += (targetAngleY - angleY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 400;

      // Rotate 3D coordinates
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedAtoms = atoms.map((atom) => {
        // Rotate Y
        let x1 = atom.x * cosY + atom.z * sinY;
        let z1 = -atom.x * sinY + atom.z * cosY;

        // Rotate X
        let y2 = atom.y * cosX - z1 * sinX;
        let z2 = atom.y * sinX + z1 * cosX;

        // Perspective scale
        const pScale = (fov / (fov + z2 + 200)) * scale;
        const px = centerX + x1 * pScale;
        const py = centerY + y2 * pScale;

        return {
          ...atom,
          px,
          py,
          pz: z2,
          pRadius: Math.max(8, atom.radius * pScale),
        };
      });

      // Draw electron clouds / orbital rings around center
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 130 * scale, 50 * scale, angleY * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(244, 162, 97, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 150 * scale, 60 * scale, -angleY * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(22, 75, 115, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 8]);
      ctx.stroke();
      ctx.restore();

      // Draw Bonds
      bonds.forEach((bond) => {
        const a1 = projectedAtoms[bond.from];
        const a2 = projectedAtoms[bond.to];
        if (!a1 || !a2) return;

        ctx.save();
        if (bond.type === 'double') {
          // Double bond offset
          const dx = a2.px - a1.px;
          const dy = a2.py - a1.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const nx = (-dy / dist) * 3.5;
          const ny = (dx / dist) * 3.5;

          ctx.strokeStyle = 'rgba(9, 40, 76, 0.45)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(a1.px + nx, a1.py + ny);
          ctx.lineTo(a2.px + nx, a2.py + ny);
          ctx.stroke();

          ctx.strokeStyle = 'rgba(244, 162, 97, 0.55)';
          ctx.beginPath();
          ctx.moveTo(a1.px - nx, a1.py - ny);
          ctx.lineTo(a2.px - nx, a2.py - ny);
          ctx.stroke();
        } else {
          // Single bond with gradient
          const grad = ctx.createLinearGradient(a1.px, a1.py, a2.px, a2.py);
          grad.addColorStop(0, a1.color);
          grad.addColorStop(1, a2.color);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(a1.px, a1.py);
          ctx.lineTo(a2.px, a2.py);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Sort atoms by Z (painter's algorithm)
      const sortedAtoms = [...projectedAtoms].sort((a, b) => a.pz - b.pz);

      // Draw Atoms
      sortedAtoms.forEach((atom) => {
        ctx.save();

        // Drop shadow for 3D depth
        ctx.shadowColor = 'rgba(9, 40, 76, 0.2)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 4;

        // Atom sphere with radial gradient lighting
        const grad = ctx.createRadialGradient(
          atom.px - atom.pRadius * 0.35,
          atom.py - atom.pRadius * 0.35,
          atom.pRadius * 0.1,
          atom.px,
          atom.py,
          atom.pRadius
        );

        if (atom.label === 'H') {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.5, '#F4A261');
          grad.addColorStop(1, '#E76F51');
        } else if (atom.label === 'O') {
          grad.addColorStop(0, '#FDF1E7');
          grad.addColorStop(0.4, '#F4A261');
          grad.addColorStop(1, '#C85A17');
        } else {
          grad.addColorStop(0, '#2A699B');
          grad.addColorStop(0.5, '#164B73');
          grad.addColorStop(1, '#09284C');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(atom.px, atom.py, atom.pRadius, 0, Math.PI * 2);
        ctx.fill();

        // Border ring
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Atom label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${Math.max(10, Math.floor(atom.pRadius * 0.9))}px "Plus Jakarta Sans", sans-serif`;
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
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [activeMolecule]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[480px] mx-auto select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Molecule Selector Pills */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-navy/10 shadow-sm text-xs font-medium text-brand-navy">
        <button
          type="button"
          onClick={() => setActiveMolecule('benzene')}
          className={`px-2.5 py-1 rounded-full transition-all ${
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
          className={`px-2.5 py-1 rounded-full transition-all ${
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
          className={`px-2.5 py-1 rounded-full transition-all ${
            activeMolecule === 'methane'
              ? 'bg-brand-navy text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-navy'
          }`}
        >
          CH₄ Methane
        </button>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

      {/* Floating Periodic Badges */}
      <div className="absolute top-12 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-brand-navy/10 shadow-sm text-left animate-float">
        <div className="text-[10px] text-brand-muted font-mono leading-none">1</div>
        <div className="text-base font-bold text-brand-navy leading-none">H</div>
        <div className="text-[9px] text-brand-muted font-mono leading-none mt-0.5">1.008</div>
      </div>

      <div className="absolute bottom-16 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-brand-navy/10 shadow-sm text-left animate-float-delayed">
        <div className="text-[10px] text-brand-muted font-mono leading-none">6</div>
        <div className="text-base font-bold text-brand-navy leading-none">C</div>
        <div className="text-[9px] text-brand-muted font-mono leading-none mt-0.5">12.011</div>
      </div>

      <div className="absolute top-20 right-6 bg-brand-navy/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-md text-xs font-medium animate-float">
        <span className="text-brand-orange font-bold mr-1">H₂O</span>
        <span className="text-[11px] text-slate-300">104.5° Bond Angle</span>
      </div>

      {/* Interactive Helper Hint */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-brand-muted bg-white/70 backdrop-blur-sm px-3 py-0.5 rounded-full transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Move cursor to rotate 3D molecule
      </div>
    </div>
  );
};
