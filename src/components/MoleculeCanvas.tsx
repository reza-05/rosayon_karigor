import { useEffect, useRef, useState } from 'react';
import { Zap, Orbit, Compass } from 'lucide-react';

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

interface MoleculeMetadata {
  name: string;
  formula: string;
  badge1: {
    icon: 'zap' | 'orbit' | 'compass';
    tag: string;
    value: string;
    sub: string;
  };
  badge2: {
    icon: 'orbit' | 'compass';
    tag: string;
    value: string;
    sub: string;
  };
}

const moleculeMetadata: Record<'benzene' | 'water' | 'methane' | 'ethanol', MoleculeMetadata> = {
  benzene: {
    name: 'Benzene',
    formula: 'C₆H₆',
    badge1: {
      icon: 'zap',
      tag: 'HYBRIDIZATION & ENERGY',
      value: 'sp² • 150.7 kJ/mol',
      sub: 'Delocalized π-Cloud',
    },
    badge2: {
      icon: 'orbit',
      tag: 'BOND ANGLE',
      value: '120.0°',
      sub: 'Planar Hexagon (∠C-C-C)',
    },
  },
  water: {
    name: 'Water',
    formula: 'H₂O',
    badge1: {
      icon: 'compass',
      tag: 'GEOMETRY & HYBRID',
      value: 'V-Shaped (Bent) • sp³',
      sub: '2 Bond Pairs + 2 Lone Pairs',
    },
    badge2: {
      icon: 'orbit',
      tag: 'BOND ANGLE',
      value: '104.5°',
      sub: 'Lone Pair Repulsion (VSEPR)',
    },
  },
  methane: {
    name: 'Methane',
    formula: 'CH₄',
    badge1: {
      icon: 'compass',
      tag: 'GEOMETRY & HYBRID',
      value: 'Tetrahedral • sp³',
      sub: '4 Equivalent C-H σ-Bonds',
    },
    badge2: {
      icon: 'orbit',
      tag: 'BOND ANGLE',
      value: '109.5°',
      sub: 'Regular Tetrahedron (109°28\')',
    },
  },
  ethanol: {
    name: 'Ethanol',
    formula: 'C₂H₅OH',
    badge1: {
      icon: 'zap',
      tag: 'FUNCTIONAL GROUP',
      value: '-OH (Hydroxyl)',
      sub: 'Polar Alcohol & H-Bonding',
    },
    badge2: {
      icon: 'orbit',
      tag: 'BOND ANGLES',
      value: '108.5° & 104.5°',
      sub: '∠C-C-O (~108.5°) & ∠C-O-H (~104.5°)',
    },
  },
};

export const MoleculeCanvas = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMolecule, setActiveMolecule] = useState<'benzene' | 'water' | 'methane' | 'ethanol'>('benzene');
  const [isDragging, setIsDragging] = useState(false);

  // References for inertial physics
  const physicsRef = useRef({
    angleX: 0.15,
    angleY: 0.35,
    velX: 0,
    velY: 0.0035, // gentle idle rotation
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
        // Water H2O: Exact 104.5° bond angle
        // Half angle = 52.25°. Bond length = 82
        const bondLength = 82;
        const halfAngleRad = (52.25 * Math.PI) / 180;
        const hX = bondLength * Math.sin(halfAngleRad); // ~64.8
        const hY = bondLength * Math.cos(halfAngleRad); // ~50.2

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
            electrons: '2, 6 (sp³)',
          },
          {
            x: -hX,
            y: -22 + hY,
            z: 0,
            radius: 17,
            color: '#164B73',
            borderColor: '#09284C',
            label: 'H',
            element: 'Hydrogen',
            atomicNum: 1,
            mass: '1.008',
            electrons: '1s¹',
          },
          {
            x: hX,
            y: -22 + hY,
            z: 0,
            radius: 17,
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
        // Methane CH4: Exact regular tetrahedron (all angles = 109.47°)
        const L = 74;
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
            x: 0,
            y: -L,
            z: 0,
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
            x: L * (2 * Math.SQRT2 / 3),
            y: L / 3,
            z: 0,
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
            x: -L * (Math.SQRT2 / 3),
            y: L / 3,
            z: L * Math.sqrt(2 / 3),
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
            x: -L * (Math.SQRT2 / 3),
            y: L / 3,
            z: -L * Math.sqrt(2 / 3),
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
        // Ethanol C2H5OH: Complete 3D model
        const atoms: Atom[] = [
          // Carbons
          { x: -50, y: 12, z: 0, radius: 22, color: '#09284C', borderColor: '#164B73', label: 'C', element: 'Carbon', atomicNum: 6, mass: '12.011', electrons: 'Methyl Carbon' },
          { x: 26, y: -10, z: 0, radius: 22, color: '#09284C', borderColor: '#164B73', label: 'C', element: 'Carbon', atomicNum: 6, mass: '12.011', electrons: 'Methylene Carbon' },
          // Hydroxyl Oxygen
          { x: 82, y: 32, z: 0, radius: 23, color: '#F4A261', borderColor: '#E76F51', label: 'O', element: 'Oxygen', atomicNum: 8, mass: '15.999', electrons: 'Hydroxyl Oxygen' },
          // Hydroxyl Hydrogen
          { x: 126, y: 20, z: 0, radius: 14, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: 'Hydroxyl Proton' },
          // Methyl Hydrogens (3)
          { x: -74, y: -18, z: 32, radius: 13, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: '1s¹' },
          { x: -74, y: -18, z: -32, radius: 13, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: '1s¹' },
          { x: -74, y: 52, z: 0, radius: 13, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: '1s¹' },
          // Methylene Hydrogens (2)
          { x: 28, y: -52, z: 32, radius: 13, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: '1s¹' },
          { x: 28, y: -52, z: -32, radius: 13, color: '#164B73', borderColor: '#09284C', label: 'H', element: 'Hydrogen', atomicNum: 1, mass: '1.008', electrons: '1s¹' },
        ];
        const bonds: Bond[] = [
          { from: 0, to: 1, type: 'single' },
          { from: 1, to: 2, type: 'single' },
          { from: 2, to: 3, type: 'single' },
          { from: 0, to: 4, type: 'single' },
          { from: 0, to: 5, type: 'single' },
          { from: 0, to: 6, type: 'single' },
          { from: 1, to: 7, type: 'single' },
          { from: 1, to: 8, type: 'single' },
        ];
        return { atoms, bonds, scale: 0.95 };
      } else {
        // Benzene C6H6: True flat regular planar hexagon (z = 0 for all atoms)
        // All angles = 120°, sp² hybridization
        const R = 76;
        const R_H = 120;
        const atoms: Atom[] = [];
        const bonds: Bond[] = [];

        // 6 Carbon atoms on a planar hexagon
        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R * Math.cos(theta),
            y: R * Math.sin(theta),
            z: 0, // Perfectly planar
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

        // 6 Hydrogen atoms extending radially outwards
        for (let i = 0; i < 6; i++) {
          const theta = (i * Math.PI) / 3;
          atoms.push({
            x: R_H * Math.cos(theta),
            y: R_H * Math.sin(theta),
            z: 0, // Perfectly planar
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

        // Bonds
        for (let i = 0; i < 6; i++) {
          bonds.push({
            from: i,
            to: (i + 1) % 6,
            type: 'single',
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
        p.angleY += p.velY + 0.003; // smooth subtle idle spin
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

      // 1. If Benzene, render inscribed 3D-projected aromatic delocalized pi-ring
      if (activeMolecule === 'benzene') {
        ctx.save();
        ctx.beginPath();
        const innerRadius = 45;
        const segments = 36;
        for (let s = 0; s <= segments; s++) {
          const phi = (s / segments) * Math.PI * 2;
          const rx = innerRadius * Math.cos(phi);
          const ry = innerRadius * Math.sin(phi);
          const rz = 0;

          const rx1 = rx * cosY + rz * sinY;
          const rz1 = -rx * sinY + rz * cosY;
          const ry2 = ry * cosX - rz1 * sinX;
          const rz2 = ry * sinX + rz1 * cosX;

          const pScaleRing = (fov / (fov + rz2 + 220)) * scale;
          const pxRing = centerX + rx1 * pScaleRing;
          const pyRing = centerY + ry2 * pScaleRing;

          if (s === 0) {
            ctx.moveTo(pxRing, pyRing);
          } else {
            ctx.lineTo(pxRing, pyRing);
          }
        }
        ctx.strokeStyle = '#F4A261';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.restore();
      }

      // 2. If Water, render Oxygen's 2 Lone Pairs in 3D
      if (activeMolecule === 'water') {
        ctx.save();
        const lonePairs = [
          { x: 0, y: -52, z: 28 },
          { x: 0, y: -52, z: -28 },
        ];
        lonePairs.forEach((lp) => {
          const lx1 = lp.x * cosY + lp.z * sinY;
          const lz1 = -lp.x * sinY + lp.z * cosY;
          const ly2 = lp.y * cosX - lz1 * sinX;
          const lz2 = lp.y * sinX + lz1 * cosX;

          const pScaleLP = (fov / (fov + lz2 + 220)) * scale;
          const pxLP = centerX + lx1 * pScaleLP;
          const pyLP = centerY + ly2 * pScaleLP;

          // Translucent lone pair orbital lobe
          ctx.beginPath();
          ctx.arc(pxLP, pyLP, 10 * pScaleLP, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(244, 162, 97, 0.2)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(231, 111, 81, 0.5)';
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 3]);
          ctx.stroke();

          // Electron pair dots
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(pxLP - 3, pyLP, 2, 0, Math.PI * 2);
          ctx.arc(pxLP + 3, pyLP, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#E76F51';
          ctx.fill();
        });
        ctx.restore();
      }

      const projectedAtoms = atoms.map((atom) => {
        const x1 = atom.x * cosY + atom.z * sinY;
        const z1 = -atom.x * sinY + atom.z * cosY;

        const y2 = atom.y * cosX - z1 * sinX;
        const z2 = atom.y * sinX + z1 * cosX;

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

      // 3. Bonds with clean solid lines
      bonds.forEach((bond) => {
        const a1 = projectedAtoms[bond.from];
        const a2 = projectedAtoms[bond.to];
        if (!a1 || !a2) return;

        ctx.save();
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
        ctx.restore();
      });

      // 4. Proper 3D Depth Occlusion (Painter's Algorithm: Farthest first, Nearest last)
      interface RenderableItem {
        pz: number;
        render: () => void;
      }

      const renderList: RenderableItem[] = [];

      // Add atoms to renderList
      projectedAtoms.forEach((atom) => {
        renderList.push({
          pz: atom.pz,
          render: () => {
            ctx.save();

            // 3D Depth Shadow
            ctx.shadowColor = 'rgba(9, 40, 76, 0.2)';
            ctx.shadowBlur = 12;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 4;

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
          },
        });
      });

      // If Water, add Lone Pairs to renderList with their respective 3D depth
      if (activeMolecule === 'water') {
        const lonePairs = [
          { x: 0, y: -52, z: 28 },
          { x: 0, y: -52, z: -28 },
        ];
        lonePairs.forEach((lp) => {
          const lx1 = lp.x * cosY + lp.z * sinY;
          const lz1 = -lp.x * sinY + lp.z * cosY;
          const ly2 = lp.y * cosX - lz1 * sinX;
          const lz2 = lp.y * sinX + lz1 * cosX;

          const pScaleLP = (fov / (fov + lz2 + 220)) * scale;
          const pxLP = centerX + lx1 * pScaleLP;
          const pyLP = centerY + ly2 * pScaleLP;

          renderList.push({
            pz: lz2,
            render: () => {
              ctx.save();
              // Translucent lone pair orbital lobe
              ctx.beginPath();
              ctx.arc(pxLP, pyLP, 10 * pScaleLP, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(244, 162, 97, 0.2)';
              ctx.fill();
              ctx.strokeStyle = 'rgba(231, 111, 81, 0.5)';
              ctx.lineWidth = 1;
              ctx.setLineDash([2, 3]);
              ctx.stroke();

              // Electron pair dots
              ctx.setLineDash([]);
              ctx.beginPath();
              ctx.arc(pxLP - 3, pyLP, 2, 0, Math.PI * 2);
              ctx.arc(pxLP + 3, pyLP, 2, 0, Math.PI * 2);
              ctx.fillStyle = '#E76F51';
              ctx.fill();
              ctx.restore();
            },
          });
        });
      }

      // Sort descending: largest positive pz (farthest back) rendered first,
      // smallest/negative pz (closest front) rendered last (occluding items behind them)
      renderList.sort((a, b) => b.pz - a.pz);
      renderList.forEach((item) => item.render());

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeMolecule]);

  // Inertial Pointer & Touch Drag Handlers
  const handlePointerDown = (clientX: number, clientY: number) => {
    setIsDragging(true);
    const p = physicsRef.current;
    p.isMouseDown = true;
    p.lastMouseX = clientX;
    p.lastMouseY = clientY;
    p.velX = 0;
    p.velY = 0;
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    const p = physicsRef.current;
    if (p.isMouseDown) {
      const deltaX = clientX - p.lastMouseX;
      const deltaY = clientY - p.lastMouseY;
      p.velY = deltaX * 0.008;
      p.velX = -deltaY * 0.008;
      p.angleY += p.velY;
      p.angleX += p.velX;
      p.lastMouseX = clientX;
      p.lastMouseY = clientY;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    physicsRef.current.isMouseDown = false;
  };

  const meta = moleculeMetadata[activeMolecule];

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[480px] mx-auto select-none touch-none ${className}`}
      onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
    >
      {/* Top Clean Molecule Selector */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200/90 shadow-xs text-xs font-semibold text-brand-navy">
        <button
          type="button"
          onClick={() => setActiveMolecule('benzene')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'benzene'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'text-slate-500 hover:text-brand-navy'
          }`}
        >
          C₆H₆ Benzene
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('water')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'water'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'text-slate-500 hover:text-brand-navy'
          }`}
        >
          H₂O Water
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('methane')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'methane'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'text-slate-500 hover:text-brand-navy'
          }`}
        >
          CH₄ Methane
        </button>
        <button
          type="button"
          onClick={() => setActiveMolecule('ethanol')}
          className={`px-3 py-1 rounded-full transition-all duration-200 ${
            activeMolecule === 'ethanol'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'text-slate-500 hover:text-brand-navy'
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

      {/* Dynamic Scientific Badge 1: Top Left */}
      <div className="absolute top-14 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-200/80 shadow-sm text-left animate-float">
        <div className="flex items-center gap-1.5 text-[10px] text-brand-orange font-mono uppercase font-bold tracking-wider">
          {meta.badge1.icon === 'zap' && <Zap className="w-3 h-3 text-brand-orange" />}
          {meta.badge1.icon === 'compass' && <Compass className="w-3 h-3 text-brand-ocean" />}
          {meta.badge1.icon === 'orbit' && <Orbit className="w-3 h-3 text-emerald-600" />}
          <span>{meta.badge1.tag}</span>
        </div>
        <div className="text-sm font-sans font-bold text-brand-navy mt-0.5">{meta.badge1.value}</div>
        <div className="text-[10.5px] text-slate-500 font-sans">{meta.badge1.sub}</div>
      </div>

      {/* Dynamic Scientific Badge 2: Bottom Right (Right Angle & Figure Info) */}
      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-sm text-left animate-float-delayed">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono uppercase font-bold tracking-wider">
          <Orbit className="w-3 h-3" />
          <span>{meta.badge2.tag}</span>
        </div>
        <div className="text-sm font-sans font-bold text-brand-navy mt-0.5">{meta.badge2.value}</div>
        <div className="text-[10.5px] text-slate-500 font-sans">{meta.badge2.sub}</div>
      </div>
    </div>
  );
};
