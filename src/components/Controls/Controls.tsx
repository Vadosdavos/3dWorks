import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBgColor, changeDeckColor } from '../../store/slices/colorSlice';
import styles from './Controls.module.css';

export const Controls = () => {
  const colors = ['red', 'white', 'blue', 'green', 'yellow'];
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const dispatch = useDispatch();

  const handleDeckColorClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLDivElement;
    dispatch(changeDeckColor(target.id));
  };

  const handleBgColorInput = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatch(changeBgColor(target.value));
    setBgColorValue(target.value);
  };

  return (
    <div className={styles.controlsContainer}>
      <h3>Control panel</h3>
      <h5>Background color</h5>
      <input type='color' id='bgColorInput' value={bgColorValue} onInput={handleBgColorInput} />
      <h5>Deck print color</h5>
      <div className={styles.colorsContainer}>
        {colors.map((el) => (
          <div
            key={el}
            style={{ backgroundColor: el }}
            className={styles.colorItem}
            onClick={handleDeckColorClick}
            id={el}
          />
        ))}
      </div>
    </div>
  );
};
