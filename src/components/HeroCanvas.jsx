import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Particles
    const count = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.002 + Math.random() * 0.006;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: new THREE.Color("#7c3aed"),
      transparent: true,
      opacity: 0.9
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Glowing torus-knot initials (stylized "RS")
    const torusGeom = new THREE.TorusKnotGeometry(1.1, 0.28, 180, 32);
    const torusMat = new THREE.MeshPhongMaterial({ color: 0x9f7aea, emissive: 0x3b0764, shininess: 80 });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    torus.position.set(0, 0, 0);
    scene.add(torus);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const point = new THREE.PointLight(0x8b5cf6, 2, 30);
    point.position.set(5, 4, 5);
    scene.add(point);

    // Resize
    function onResize() {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    window.addEventListener("resize", onResize);

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    function onMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
    }
    window.addEventListener("mousemove", onMouseMove);

    // Animate
    let raf;
    const clock = new THREE.Clock();
    function animate() {
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const ix = i * 3 + 0;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        pos.array[iy] += Math.sin(t * speeds[i] + pos.array[ix]) * 0.0015;
        pos.array[ix] += Math.cos(t * speeds[i] + pos.array[iz]) * 0.001;
      }
      pos.needsUpdate = true;

      // Smooth parallax
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 0.8 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      torus.rotation.x += 0.004;
      torus.rotation.y += 0.006;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
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
