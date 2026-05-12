/* eslint-disable react/no-unknown-property */
'use client';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, Html } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

const HireMeParallax = () => {
  return (
    <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-0 bg-[#fce4ec] items-center border-t border-[#b4647d]/10">
      
      {/* LEFT SIDE: WHY HIRE ME PARAGRAPH */}
      <div className="flex flex-col justify-center px-10 md:px-20 h-full space-y-8 z-10">
        <span className="text-[#b4647d] font-moo text-sm tracking-[0.4em] uppercase">Professional ID</span>
        
        <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] text-[#334155] leading-tight font-normal">
          Why you should <span className="font-bold italic">Hire Me</span>.
        </h2>
        
        <p className="text-xl text-[#334155]/80 leading-relaxed font-light max-w-xl">
          I bridge the gap between architectural logic and immersive digital experiences. 
          By combining high-end agency aesthetics with robust frontend systems, 
          I build products that aren't just functional—they are visually and technically enduring.
        </p>
        
        <div className="w-20 h-px bg-[#b4647d]"></div>
      </div>

      {/* RIGHT SIDE: 3D INTERACTIVE LANYARD */}
      <div className="relative w-full h-full border-l border-[#b4647d]/5 cursor-grab active:cursor-grabbing">
        <LanyardCanvas />
        
        {/* Interaction Hint */}
        <div className="absolute bottom-10 right-10 text-[#b4647d]/40 font-mono text-xs tracking-widest uppercase pointer-events-none">
          Click & Drag ID Card
        </div>
      </div>
    </section>
  );
};

/* --- 3D CANVAS COMPONENT --- */
function LanyardCanvas({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20 }) {
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  return (
    <Canvas
      camera={{ position: position, fov: fov }}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={Math.PI} />
      <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
        {/* Suspense Wrapper to prevent layout crashing! */}
        <Suspense fallback={
          <Html center>
            <div className="text-[#b4647d] font-mono bg-white/50 px-4 py-2 rounded-md backdrop-blur-sm">
              Loading 3D...
            </div>
          </Html>
        }>
          <Band isMobile={isMobile} />
        </Suspense>
      </Physics>
      <Environment blur={0.75}>
        <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
      </Environment>
    </Canvas>
  );
}

/* --- PHYSICS BAND & CARD LOGIC --- */
function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

  // DEBUGGING HOOK: Verify what Vite is actually serving
  useEffect(() => {
    fetch('/card.glb').then(async (res) => {
      const contentType = res.headers.get('content-type');
      console.log('DEBUG: /card.glb returned content-type:', contentType);
      if (contentType && contentType.includes('text/html')) {
        console.error('CRITICAL ERROR: /card.glb is returning HTML! Vite is serving index.html because card.glb does NOT exist in the public/ folder.');
      }
    }).catch(err => console.error("Fetch debug error:", err));
  }, []);

  // Use hardcoded paths exactly as requested
  const { nodes, materials } = useGLTF('/card.glb');
  const texture = useTexture('/lanyard.png');
  const photoTexture = useTexture('/lanyard.png'); 

  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={photoTexture} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} useMap map={texture} repeat={[-4, 1]} lineWidth={1} />
      </mesh>
    </>
  );
}

export default HireMeParallax;