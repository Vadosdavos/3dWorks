import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { ObjectMap, useLoader } from '@react-three/fiber';
import skateModel from '../../assets/models/skate.glb';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { statePropsType, TargetType } from '../../constants/types';
import { TEXTURES } from '../../constants/constants';

const ROTATE_Y_90 = Math.PI * 0.5;

export const Skate = ({ state }: statePropsType) => {
  const { deckColor, deckTexture, target } = state;
  const skate = useLoader(GLTFLoader, skateModel) as GLTF & ObjectMap;
  const model = useRef(skate.scene);
  const threeTextures = useLoader(TextureLoader, TEXTURES);

  const deck = skate.nodes['Rear_Truck_HP_bushing2_Wood_0'] as THREE.Mesh;

  useEffect(() => {
    switch (target) {
      case TargetType.deckColor:
        const newColor = new THREE.MeshStandardMaterial({
          color: new THREE.Color(deckColor),
        });
        deck.material = newColor;
        break;

      case TargetType.texture:
        if (deckTexture) {
          const texture = threeTextures[+deckTexture - 1];
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(3, 3);
          const newPrint = new THREE.MeshStandardMaterial({ map: texture });
          deck.material = newPrint;
        }
        break;

      default:
        break;
    }
  }, [deckColor, deckTexture, target]);

  // useEffect(() => {
  //   if (target === TargetType.texture) {
  //     console.log(deckTexture);
  //   }
  //   texture.wrapS = THREE.RepeatWrapping;
  //   texture.wrapT = THREE.RepeatWrapping;
  //   texture.repeat.set(3, 3);
  //   const newPrint = new THREE.MeshStandardMaterial({ map: texture });
  //   deck.material = newPrint;
  // }, [deckTexture]);

  return <primitive ref={model} object={skate.scene} scale={[1, 1, 1]} rotation={[0, -ROTATE_Y_90, 0]} />;
};
