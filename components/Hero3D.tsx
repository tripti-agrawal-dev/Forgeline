"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(Math.min(devicePixelRatio, 2));
    el.appendChild(r.domElement);
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    cam.position.z = 6.2;
    const g = new THREE.Group();
    scene.add(g);
    const mk = (geo: THREE.BufferGeometry, color: number, opacity: number) =>
      new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity }));
    const shell = mk(new THREE.IcosahedronGeometry(1.9, 2), 0x2563eb, 0.5);
    const core = mk(new THREE.OctahedronGeometry(0.95, 0), 0x22d3ee, 0.9);
    const ring = mk(new THREE.TorusGeometry(2.7, 0.012, 8, 160), 0x7dd3fc, 0.6);
    ring.rotation.x = 1.2;
    const n = 700, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(2.6 + Math.random() * 1.6);
      pos.set([v.x, v.y, v.z], i * 3);
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.022, transparent: true, opacity: 0.8 }));
    g.add(shell, core, ring, pts);
    const size = () => { const { clientWidth: w, clientHeight: h } = el; r.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    size();
    const ro = new ResizeObserver(size); ro.observe(el);
    let mx = 0, my = 0, raf = 0;
    const move = (e: PointerEvent) => { mx = (e.clientX / innerWidth - 0.5) * 2; my = (e.clientY / innerHeight - 0.5) * 2; };
    addEventListener("pointermove", move);
    const tick = (t: number) => {
      const s = t / 1000;
      shell.rotation.y = s * 0.15; core.rotation.set(s * 0.4, s * 0.5, 0); pts.rotation.y = -s * 0.04;
      g.rotation.y += (mx * 0.5 - g.rotation.y) * 0.04; g.rotation.x += (my * 0.3 - g.rotation.x) * 0.04;
      r.render(scene, cam);
      raf = requestAnimationFrame(tick);
    };
    reduce ? r.render(scene, cam) : (raf = requestAnimationFrame(tick));
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); removeEventListener("pointermove", move);
      scene.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose(); (m.material as THREE.Material)?.dispose?.(); });
      r.dispose(); r.domElement.remove();
    };
  }, []);
  return <div ref={ref} className="size-full" aria-hidden />;
}
