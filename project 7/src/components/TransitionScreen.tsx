import React, { useEffect, useRef } from 'react';

const TransitionScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      glow: number;
    }> = [];

    // Create neural network nodes
    for (let i = 0; i < 100; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        glow: Math.random()
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.glow = Math.sin(time + i * 0.1) * 0.5 + 0.5;

        // Wrap around edges
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (150 - distance) / 150;
              ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();

              // Electric pulse effect
              if (Math.random() < 0.01) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
              }
            }
          }
        });

        // Draw node
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3
        );
        gradient.addColorStop(0, `rgba(0, 255, 255, ${node.glow})`);
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 text-center">
        <div className="text-4xl font-bold text-cyan-400 mb-4 neural-pulse">
          ENTERING THAHA WORLD
        </div>
        <div className="text-xl text-cyan-300 mb-8">
          Initializing digital consciousness...
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>

      {/* Zoom effect overlay */}
      <div className="zoom-tunnel"></div>
    </div>
  );
};

export default TransitionScreen;