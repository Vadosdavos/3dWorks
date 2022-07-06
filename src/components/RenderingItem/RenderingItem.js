// import * as THREE from 'three';
// import { useEffect, useRef } from 'react';
// import tex from './tex.jpg';

// export const RenderingItem = ({ type }) => {
//   const geometries = {
//     cube: new THREE.BoxGeometry(1, 1, 1),
//     sphere: new THREE.SphereGeometry(1, 32, 16),
//     tetrahedron: new THREE.TetrahedronGeometry(1, 0),
//   };
//   const refContainer = useRef();

//   useEffect(() => {
//     const { current: container } = refContainer;
//     const contW = container.clientWidth;
//     const contH = container.clientHeight;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(45, contW / contH, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(renderer.domElement);

//     const texture = new THREE.TextureLoader().load(tex);

//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const shape = new THREE.Mesh(geometries[type], material);
//     scene.add(shape);

//     camera.position.set(0, 0, 5);
//     camera.lookAt(0, 0, 0);

//     let req = null;
//     const animate = () => {
//       req = requestAnimationFrame(animate);

//       shape.rotation.x += 0.01;
//       shape.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };
//     animate();
//     return () => {
//       cancelAnimationFrame(req);
//       container.removeChild(renderer.domElement);
//     };
//   }, [type]);

//   return <div ref={refContainer} className='container' />;
// };
