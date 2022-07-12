import * as THREE from 'three';
import React, { useState, useRef, useEffect } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import skateModel from '../../assets/models/skate.glb';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Skate = (props: JSX.IntrinsicElements['mesh']) => {
  const [hovered, setHovered] = useState(false);
  const skate = useLoader(GLTFLoader, skateModel) as GLTF;
  const model = useRef(skate.scene);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [hovered]);

  return (
    <primitive
      ref={model}
      object={skate.scene}
      scale={[0.1, 0.1, 0.1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};
