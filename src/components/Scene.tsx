import * as THREE from 'three';
import React, { useEffect } from 'react';
import { extend, Object3DNode, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Skate } from './Skate/Skate';
import { statePropsType } from '../constants/types';

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

export const Scene = ({ state }: statePropsType) => {
  const { bgColor } = state;
  const target = new THREE.Vector3(0, 0, 0);
  const {
    scene,
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    camera.position.y = -60;
    camera.lookAt(target);
  }, []);

  useEffect(() => {
    scene.background = new THREE.Color(bgColor);
  }, [bgColor]);

  return (
    <>
      <orbitControls args={[camera, domElement]} target={target} maxDistance={100} minDistance={20} />
      <hemisphereLight intensity={0.8} position={[0, 10, 0]} />
      <directionalLight intensity={0.5} position={[0, -10, 0]} />
      <directionalLight intensity={1} position={[0, 10, 0]} />
      <Skate state={state} />
    </>
  );
};
