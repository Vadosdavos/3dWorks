import React from 'react';
import { Controls } from './components/Controls/Controls';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { Scene } from './components/Scene';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

export const App = (): JSX.Element => {
  const bgColor = useSelector((state: RootState) => state.colors.bgColor);
  const deckColor = useSelector((state: RootState) => state.colors.deckColor);

  return (
    <>
      <header className='header'>
        <h2>Skateboard 3d configurator</h2>
      </header>
      <main className='mainContainer'>
        <Controls />
        <div className='canvasContainer'>
          <Canvas>
            <Scene bgColor={bgColor} deckColor={deckColor} />
          </Canvas>
        </div>
      </main>
      <footer className='footer'>
        <div>
          <a href='https://github.com/Vadosdavos'>@Vadosdavos</a>, 2022
        </div>
      </footer>
    </>
  );
};
