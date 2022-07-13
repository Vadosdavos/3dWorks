import React from 'react';
import { Controls } from './components/Controls/Controls';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { Scene } from './components/Scene';

export const App = (): JSX.Element => {
  return (
    <>
      <div className='header'>
        <h2>3d constructor</h2>
      </div>
      <div className='mainContainer'>
        <Controls />
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </>
  );
};
