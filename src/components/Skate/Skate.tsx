import React, { useState, useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import skateModel from '../../assets/models/skate.glb';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ROTATE_Y_90 = Math.PI * 0.5;

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
      scale={[1, 1, 1]}
      rotation={[0, ROTATE_Y_90, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};
