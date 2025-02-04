import * as THREE from 'three';
import React, { useEffect } from 'react';
import { extend, Object3DNode, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Skate } from './Skate/Skate';
import { SettingsState } from "../store/slices/settingsSlice";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

export const Scene = ({ state }: { state: SettingsState }): JSX.Element => {
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
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.7} position={[0, -30, 0]} />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
      <Skate state={state} />
    </>
  );
};
