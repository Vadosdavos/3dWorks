import React from 'react';
import { Skate } from './components/Skate/Skate';
import { Controls } from './components/Controls/Controls';
import { Canvas } from '@react-three/fiber';
import './App.css';

export const App = () => {
  return (
    <>
      <header className='header'>
        <h2>3d constructor</h2>
      </header>
      <main className='mainContainer'>
        <Canvas style={{ width: '50vw', height: '50vw' }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 10, 10]} />
          <Skate />
        </Canvas>
        <Controls />
      </main>
    </>
  );
};
