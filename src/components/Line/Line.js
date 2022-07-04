import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

export const Line = () => {
  const refContainer = useRef();

  useEffect(() => {
    const { current: container } = refContainer;
    const contW = container.clientWidth;
    const contH = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, contW / contH, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({ color: 0x000000 });
    const points = [];
    points.push(new THREE.Vector3(-2, 0, 0));
    points.push(new THREE.Vector3(0, 2, 0));
    points.push(new THREE.Vector3(2, 0, 0));
    points.push(new THREE.Vector3(-2, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    let req = null;
    const animate = () => {
      req = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(req);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={refContainer} className='container' />;
};
