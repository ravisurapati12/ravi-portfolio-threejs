import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Cyan Particle Field
    const count = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: new THREE.Color("#22d3ee"), // cyan-400
      transparent: true,
      opacity: 0.9,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Rotating Torus Knot with Cyan Glow
    const torusGeom = new THREE.TorusKnotGeometry(1.8, 0.45, 240, 32);
    const torusMat = new THREE.MeshPhongMaterial({
      color: 0x0891b2,       // cyan-700
      emissive: 0x06b6d4,    // cyan-500 glow
      emissiveIntensity: 1.0,
      shininess: 180,
    });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    scene.add(torus);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const point = new THREE.PointLight(0x22d3ee, 3, 60);
    point.position.set(5, 6, 10);
    scene.add(point);

    // Animate
    let raf;
    const animate = () => {
      torus.rotation.x += 0.004;
      torus.rotation.y += 0.006;
      particles.rotation.y += 0.0004;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const onResize = () => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
