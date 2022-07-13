import React, { SyntheticEvent } from 'react';
import styles from './Controls.module.css';

export const Controls = () => {
  const colors = ['red', 'white', 'blue', 'green', 'yellow'];

  const handleColorClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    console.log(target.id);
  };

  return (
    <div className={styles.controlsContainer}>
      <h3>Control panel</h3>
      <h5>Deck print</h5>
      <div className={styles.colorsContainer}>
        {colors.map((el) => (
          <div
            key={el}
            style={{ backgroundColor: el }}
            className={styles.colorItem}
            onClick={handleColorClick}
            id={el}
          />
        ))}
      </div>
    </div>
  );
};
