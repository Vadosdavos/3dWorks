import * as THREE from 'three';
import React, { useState, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import tex from '../../assets/textures/tex.jpg';
import skateModel from '../../assets/models/skate.glb';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Skate = (props: JSX.IntrinsicElements['mesh']) => {
  const skate = useLoader(GLTFLoader, skateModel) as GLTF;
  const model = useRef(skate.scene);

  useFrame(() => {
    model.current.rotation.x += 0.01;
  });

  return <primitive ref={model} object={skate.scene} scale={[2, 2, 2]} position={[0, 0, -100]} />;
};
