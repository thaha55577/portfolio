import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface LandingScreenProps {
  onGlobeClick: () => void;
}

const DigitalGlobe: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  // Generate points for globe surface
  const points = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 2000);
      const theta = Math.sqrt(2000 * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi) * 2.5;
      const y = Math.cos(phi) * 2.5;
      const z = Math.sin(theta) * Math.sin(phi) * 2.5;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  return (
    <group onClick={onClick}>
      {/* Main globe wireframe */}
      <Sphere ref={globeRef} args={[2.5, 32, 32]}>
        <meshBasicMaterial 
          color="#00ffff" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </Sphere>
      
      {/* Glowing points */}
      <Points ref={pointsRef} positions={points}>
        <PointMaterial 
          color="#00ffff" 
          size={0.02} 
          transparent 
          opacity={0.8}
        />
      </Points>
      
      {/* Inner glow */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial 
          color="#0066ff" 
          transparent 
          opacity={0.1}
        />
      </Sphere>
    </group>
  );
};

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onGlobeClick }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-blue-900 to-black">
      <BinaryRain />
      
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="hexagon-pattern"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-cyan-400 mb-4 glitch-text">
            SHAIK THAHA
          </h1>
          <p className="text-xl text-cyan-300 typewriter">
            Enter the Digital Realm
          </p>
        </div>

        {/* 3D Globe */}
        <div className="w-96 h-96 cursor-pointer hover:scale-110 transition-transform duration-500">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <DigitalGlobe onClick={onGlobeClick} />
          </Canvas>
        </div>

        <div className="mt-8 text-center">
          <p className="text-cyan-400 animate-pulse">Click the globe to enter</p>
          <div className="mt-4 flex justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mx-1"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mx-1" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mx-1" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingScreen;