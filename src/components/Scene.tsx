import * as THREE from 'three';
import React, { useEffect } from 'react';
import { extend, Object3DNode, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Skate } from './Skate/Skate';

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

export const Scene = () => {
  const target = new THREE.Vector3(0, 0, 0);
  const {
    scene,
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    camera.position.y = -40;
    camera.lookAt(target);
  }, []);

  // useFrame(() => {
  //   camera.upda;
  // });

  return (
    <>
      <orbitControls args={[camera, domElement]} target={target} maxDistance={100} minDistance={10} />
      <hemisphereLight intensity={0.8} position={[0, 10, 0]} />
      <directionalLight intensity={0.5} position={[0, -10, 0]} />
      <Skate />
    </>
  );
};
