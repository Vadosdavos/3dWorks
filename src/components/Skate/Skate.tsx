import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { ObjectMap, useLoader } from '@react-three/fiber';
import skateModel from '../../assets/models/skate.glb';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { statePropsType, TargetType } from '../../constants/types';
import { TEXTURES } from '../../constants/constants';
import metalMapTex from '../../assets/textures/metalMap.png';
import normalMapTex from '../../assets/textures/normalMap.png';

const ROTATE_Y_90 = Math.PI * 0.5;

export const Skate = ({ state }: statePropsType): JSX.Element => {
  const { deckColor, deckTexture, target, wheelsColor } = state;
  const skate = useLoader(GLTFLoader, skateModel) as GLTF & ObjectMap;
  const model = useRef(skate.scene);
  const threeTextures = useLoader(TextureLoader, TEXTURES);
  const normalMap = useLoader(TextureLoader, normalMapTex);
  const metalMap = useLoader(TextureLoader, metalMapTex);

  const deck = skate.nodes['Rear_Truck_HP_bushing2_Wood_0'] as THREE.Mesh;
  const wheels = skate.nodes['Rear_Truck_HP_bushing2_Wheels_0'] as THREE.Mesh;

  const newMaterial = new THREE.MeshStandardMaterial({
    normalMap: normalMap,
    metalnessMap: metalMap,
    metalness: 1,
    roughnessMap: metalMap,
    roughness: 1,
  });

  useLayoutEffect(() => {
    switch (target) {
      case TargetType.deckColor:
        newMaterial.color = new THREE.Color(deckColor);
        deck.material = newMaterial;
        break;

      case TargetType.wheelsColor:
        const newWheelsColor = new THREE.MeshStandardMaterial({
          color: new THREE.Color(wheelsColor),
        });
        wheels.material = newWheelsColor;
        break;

      case TargetType.texture:
        const texture = threeTextures[+deckTexture - 1];
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        newMaterial.map = texture;
        deck.material = newMaterial;
        break;

      default:
        break;
    }
  }, [deckColor, deckTexture, target, wheelsColor]);

  return <primitive ref={model} object={skate.scene} scale={[1, 1, 1]} rotation={[0, -ROTATE_Y_90, 0]} />;
};
