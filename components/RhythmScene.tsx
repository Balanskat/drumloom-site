"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function RhythmScene() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const controller = useRef<(paused: boolean) => void>(() => {});

  useEffect(() => {
    const container = host.current!;
    let disposed = false;
    let cleanup = () => {};
    // The notation remains visible if WebGL is unavailable.
    void import("three").then(THREE => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); }
      catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 80);
      camera.position.set(0, 0, 10.7);
      const sculpture = new THREE.Group();
      scene.add(sculpture);
      sculpture.rotation.set(0.64, -0.12, -0.14);
      scene.add(new THREE.AmbientLight(0xc6dcc5, 2));
      const light = new THREE.DirectionalLight(0xe9ffe1, 5);
      light.position.set(2, 5, 6); scene.add(light);
      const rim = new THREE.PointLight(0x99ff69, 45, 15);
      rim.position.set(-4, -1, 3); scene.add(rim);
      const chrome = new THREE.MeshStandardMaterial({ color: 0xb9c5be, metalness: 0.8, roughness: 0.24 });
      const shellMaterial = new THREE.MeshStandardMaterial({ color: 0x36563c, metalness: 0.65, roughness: 0.32 });
      const headMaterial = new THREE.MeshStandardMaterial({ color: 0xe8ebd9, roughness: 0.86, metalness: 0.04 });
      const wood = new THREE.MeshStandardMaterial({ color: 0xc89c64, roughness: 0.62 });
      const shell = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.75, 1.03, 96), shellMaterial);
      sculpture.add(shell);
      const head = new THREE.Mesh(new THREE.CylinderGeometry(1.69, 1.69, 0.025, 96), headMaterial);
      head.position.y = 0.53; sculpture.add(head);
      for (const y of [-0.54, 0.57]) {
        const hoop = new THREE.Mesh(new THREE.TorusGeometry(1.76, 0.052, 12, 96), chrome);
        hoop.rotation.x = Math.PI / 2; hoop.position.y = y; sculpture.add(hoop);
      }
      for (let i = 0; i < 10; i++) {
        const angle = i / 10 * Math.PI * 2;
        const hardware = new THREE.Group();
        hardware.position.set(Math.sin(angle) * 1.79, 0, Math.cos(angle) * 1.79);
        hardware.rotation.y = angle;
        const lug = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.13), chrome);
        hardware.add(lug);
        const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.06, 8), chrome);
        hardware.add(rod);
        for (const y of [-0.55, 0.59]) {
          const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.056, 0.075, 6), chrome);
          bolt.position.y = y; hardware.add(bolt);
        }
        sculpture.add(hardware);
      }
      // Each stick pivots from its grip; its tip touches the head on alternate beats.
      const sticks: InstanceType<typeof THREE.Group>[] = [];
      for (const side of [-1, 1]) {
        const pivot = new THREE.Group();
        pivot.position.set(side * 2.05, 1.02, 1.1);
        const grip = new THREE.Vector3(0, 0, 0);
        const tip = new THREE.Vector3(-side * 1.7, -0.42, -1.1);
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.063, tip.length(), 16), wood);
        shaft.position.copy(tip).multiplyScalar(0.5);
        shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tip.clone().normalize());
        // Cylinder's narrow end points toward the tip.
        const bead = new THREE.Mesh(new THREE.SphereGeometry(0.062, 16, 12), wood);
        bead.scale.set(0.8, 0.8, 1.2); bead.position.copy(tip);
        pivot.add(shaft, bead); pivot.position.add(grip);
        sticks.push(pivot); sculpture.add(pivot);
      }
      const vibrationMaterial = new THREE.MeshBasicMaterial({ color: 0x93c777, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
      const vibration = new THREE.Mesh(new THREE.RingGeometry(0.25, 0.265, 64), vibrationMaterial);
      vibration.rotation.x = -Math.PI / 2; vibration.position.y = 0.548;
      sculpture.add(vibration);
      container.appendChild(renderer.domElement);
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      let visible = true, frame = 0, last = 0, elapsed = 0, manuallyPaused = false, contextLost = false;
      let pointerX = 0, pointerY = 0;
      const resize = () => {
        const { width, height } = container.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix();
        if (!contextLost) renderer.render(scene, camera);
      };
      function draw(now: number) {
        const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
        last = now; elapsed += delta;
        sculpture.rotation.x += (0.64 + pointerY * 0.12 - sculpture.rotation.x) * 0.035;
        sculpture.rotation.y += (-0.12 + pointerX * 0.2 - sculpture.rotation.y) * 0.035;
        sticks.forEach((stick, i) => {
          const phase = (elapsed + i * 0.5) % 1;
          const lift = Math.sin(phase * Math.PI) ** 2;
          stick.rotation.z = (i === 0 ? 1 : -1) * lift * 0.34;
        });
        const beat = (elapsed % 0.5) / 0.5;
        vibration.scale.setScalar(1 + beat * 5);
        vibrationMaterial.opacity = (1 - beat) ** 3 * 0.2;
        head.position.y = 0.53 + Math.sin(beat * Math.PI * 12) * Math.exp(-beat * 9) * 0.004;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(draw);
      }
      function sync() {
        cancelAnimationFrame(frame); last = 0;
        if (contextLost) return;
        if (visible && !document.hidden && !media.matches && !manuallyPaused) frame = requestAnimationFrame(draw);
        else renderer.render(scene, camera);
      }
      controller.current = value => { manuallyPaused = value; sync(); };
      const observer = new ResizeObserver(resize); observer.observe(container);
      const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      intersection.observe(container);
      const move = (event: PointerEvent) => {
        const bounds = container.getBoundingClientRect();
        pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
        pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
      };
      const reset = () => { pointerX = 0; pointerY = 0; };
      const lost = (event: Event) => { event.preventDefault(); contextLost = true; cancelAnimationFrame(frame); setReady(false); };
      const restored = () => { contextLost = false; resize(); sync(); setReady(true); };
      renderer.domElement.addEventListener("webglcontextlost", lost);
      renderer.domElement.addEventListener("webglcontextrestored", restored);
      container.addEventListener("pointermove", move); container.addEventListener("pointerleave", reset);
      document.addEventListener("visibilitychange", sync); media.addEventListener("change", sync);
      resize(); sync(); setReady(true);
      cleanup = () => {
        controller.current = () => {};
        cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
        container.removeEventListener("pointermove", move); container.removeEventListener("pointerleave", reset);
        document.removeEventListener("visibilitychange", sync); media.removeEventListener("change", sync);
        renderer.domElement.removeEventListener("webglcontextlost", lost);
        renderer.domElement.removeEventListener("webglcontextrestored", restored);
        scene.traverse(object => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach(material => material.dispose());
          }
        });
        renderer.dispose(); renderer.domElement.remove();
      };
    }).catch(() => { /* Static artwork remains available without WebGL. */ });
    return () => { disposed = true; cleanup(); };
  }, []);
  return <>
    <div className={`rhythm-scene ${ready ? "is-ready" : ""}`} ref={host} aria-hidden="true"><img className="scene-fallback" src={siteConfig.asset("/screenshots/rudiment-card.png")} alt="" /></div>
    {ready && <button className="motion-control" aria-pressed={paused} onClick={() => { controller.current(!paused); setPaused(!paused); }}>{paused ? "Resume motion" : "Pause motion"}<span aria-hidden="true">{paused ? " ▷" : " Ⅱ"}</span></button>}
  </>;
}
