import React, { Suspense } from 'react';
import { Controls } from '../components/Controls/Controls';
import { Canvas } from '@react-three/fiber';
import styles from './App.module.css';
import { Scene } from '../components/Scene';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CustomLoader } from '../components/CustomLoader/CustomLoader';

export const App = (): JSX.Element => {
  const bgColor = useSelector((state: RootState) => state.colors.bgColor);
  const deckColor = useSelector((state: RootState) => state.colors.deckColor);

  return (
    <>
      <header className={styles.header}>
        <h2>Skateboard 3d configurator</h2>
      </header>
      <main className={styles.mainContainer}>
        <Controls />
        <div className={styles.canvasContainer}>
          <Suspense fallback={<CustomLoader />}>
            <Canvas>
              <Scene bgColor={bgColor} deckColor={deckColor} />
            </Canvas>
            <div className={styles.tipBox}>
              <span>Scroll to zoom in</span>
              <span>Click and drag to rotate</span>
            </div>
          </Suspense>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <a href='https://github.com/Vadosdavos'>@Vadosdavos</a>, 2022
        </div>
      </footer>
    </>
  );
};
