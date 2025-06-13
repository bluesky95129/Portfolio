'use client';

import { useEffect, useRef } from 'react';

const TURQUOISE = '#40E0D0';
const PURPLE = '#9370DB';
const BG_COLOR = '#0a0c18';

interface Node {
  x: number;
  y: number;
  color: string;
  connections: number[];
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes along the lower third
    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor(window.innerWidth / 70);
      for (let i = 0; i < nodeCount; i++) {
        const x = (i + 0.5) * (window.innerWidth / nodeCount);
        const y = window.innerHeight * (0.65 + Math.random() * 0.25); // lower third
        const color = Math.random() > 0.7 ? PURPLE : TURQUOISE;
        nodes.push({ x, y, color, connections: [] });
      }
      // Connect each node to its neighbors
      nodes.forEach((node, i) => {
        node.connections = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j && Math.abs(i - j) <= 3) {
            node.connections.push(j);
          }
        }
      });
      return nodes;
    };

    nodesRef.current = createNodes();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((j) => {
          const other = nodesRef.current[j];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = node.color;
          ctx.globalAlpha = 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        });
      });
      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground; 