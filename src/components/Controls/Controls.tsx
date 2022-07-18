import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeBgColor,
  changeDeckColor,
  changeDeckTexture,
  changeTarget,
  changeWheelsColor,
} from '../../store/slices/settingsSlice';
import styles from './Controls.module.css';
import { COLORS, TEXTURES, TEX_NAME_START_INDEX, TEX_NAME_END_INDEX } from '../../constants/constants';
import { TargetType } from '../../constants/types';

export const Controls = () => {
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const dispatch = useDispatch();

  const handleDeckColorClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLDivElement;
    dispatch(changeDeckColor(target.id));
    dispatch(changeTarget(TargetType.deckColor));
  };

  const handleWheelsColorClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLDivElement;
    dispatch(changeWheelsColor(target.id));
    dispatch(changeTarget(TargetType.wheelsColor));
  };

  const handleDeckTextureClick = (event: SyntheticEvent) => {
    const target = event.target as HTMLDivElement;
    dispatch(changeDeckTexture(target.id));
    dispatch(changeTarget(TargetType.texture));
  };

  const handleBgColorInput = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatch(changeBgColor(target.value));
    setBgColorValue(target.value);
    dispatch(changeTarget(TargetType.bgColor));
  };

  return (
    <div className={styles.controlsContainer}>
      <h5>Background color</h5>
      <div className={styles.bgColorContainer}>
        <input type='color' id='bgColorInput' value={bgColorValue} onInput={handleBgColorInput} />
      </div>
      <h5>Deck print color</h5>
      <div className={styles.colorsContainer}>
        {COLORS.map((el) => (
          <div
            key={el}
            style={{ backgroundColor: el }}
            className={styles.controlItem}
            onClick={handleDeckColorClick}
            id={el}
          />
        ))}
      </div>
      <h5>Deck print texture</h5>
      <div className={styles.texturesContainer}>
        {TEXTURES.map((el) => (
          <div
            key={el}
            style={{ backgroundImage: `url(${el})` }}
            className={styles.controlItem}
            onClick={handleDeckTextureClick}
            id={el.slice(el.length - TEX_NAME_START_INDEX, el.length - TEX_NAME_END_INDEX)}
          />
        ))}
      </div>
      <h5>Wheels color</h5>
      <div className={styles.colorsContainer}>
        {COLORS.map((el) => (
          <div
            key={el}
            style={{ backgroundColor: el }}
            className={styles.controlItem}
            onClick={handleWheelsColorClick}
            id={el}
          />
        ))}
      </div>
    </div>
  );
};
