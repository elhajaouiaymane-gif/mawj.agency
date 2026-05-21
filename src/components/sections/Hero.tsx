"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Starfield ── */
function Stars({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number } | null> }) {
  const ref = useRef<THREE.Points>(null);
  const count = 1200;

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 200;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 200;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 200;
      sz[i] = Math.random() * 2;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const p = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      p[i * 3 + 1] += 0.01;
      if (mouseRef.current) {
        p[i * 3] += mouseRef.current.x * 0.001;
      }
      if (p[i * 3 + 1] > 100) p[i * 3 + 1] = -100;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.5} color="#00D4FF" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}



/* ── Ocean Shader Plane ── */
function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  const onPointerMove = useCallback((e: { point: { x: number; y: number } }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uMouse.value.set(e.point.x, e.point.y);
  }, []);

  return (
    <mesh ref={meshRef} onPointerMove={onPointerMove} position={[0, 0, -5]}>
      <planeGeometry args={[100, 100, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;
          
          float noise(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
          
          void main(){
            vUv=uv;
            vec3 pos=position;
            float w1=sin(pos.x*0.5+uTime*2.0)*0.3;
            float w2=cos(pos.y*0.4+uTime*1.5)*0.2;
            float w3=sin((pos.x+pos.y)*0.3+uTime*3.0)*0.15;
            pos.z+=w1+w2+w3;
            pos.z+=sin(pos.x*2.0+uTime*4.0)*0.05;
            pos.z+=cos(pos.y*2.0+uTime*3.0)*0.05;
            float md=length(pos.xy-uMouse*10.0);
            pos.z+=exp(-md*0.5)*sin(md*2.0-uTime*5.0)*0.5;
            gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          
          void main(){
            vec4 c1=vec4(0.04,0.13,0.27,1.0);
            vec4 c2=vec4(0.0,0.83,1.0,1.0);
            vec4 c3=vec4(1.0,0.72,0.0,1.0);
            float t=uTime*0.5;
            float v1=sin(vUv.x*3.0+t)*0.5+0.5;
            float v2=sin(vUv.y*2.0+t*0.7)*0.5+0.5;
            float v3=sin((vUv.x+vUv.y)*1.5+t*1.2)*0.5+0.5;
            vec4 col=mix(c1,c2,v1);
            col=mix(col,c3,v2*0.3);
            col=mix(col,vec4(0.0,0.53,0.8,1.0),v3);
            float spec=pow(max(0.0,sin(vUv.x*10.0+uTime*3.0)),20.0);
            col+=vec4(1.0,0.9,0.6,1.0)*spec*0.3;
            gl_FragColor=col;
          }
        `}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current = { x, y };
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      {/* WebGL Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 10, 15], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00D4FF" intensity={1.5} />
          <pointLight position={[-10, -5, 5]} color="#FFB800" intensity={0.8} />
          <WavePlane />
          <Stars mouseRef={mouseRef} />
          <fog attach="fog" args={["#0A1F44", 10, 60]} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-4"
        >
          Casablanca &rarr; Global
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-pearl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          We craft digital
          <br />
          <span className="gradient-text">waves</span> that
          <br />
          move the world.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-xl text-lg text-pearl/70 sm:text-xl"
        >
          Riding the Wave of Digital Excellence — Award-winning web design &amp; development
          studio based in Morocco.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="magnetic-btn rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ocean transition-all hover:shadow-glow-gold"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="magnetic-btn rounded-full border border-cyan/30 px-8 py-4 text-sm font-semibold text-cyan backdrop-blur-sm transition-all hover:bg-cyan/10"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-cyan">{stat.value}</div>
              <div className="mt-1 text-sm text-pearl/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mouse parallax overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </section>
  );
}
