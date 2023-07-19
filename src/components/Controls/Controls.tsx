import React, { SyntheticEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeBgColor,
  changeDeckColor,
  changeDeckTexture,
  changeTarget,
  changeWheelsColor,
} from '../../store/slices/settingsSlice';
import styles from './Controls.module.css';
import { COLORS, TEXTURES } from '../../constants/constants';
import { Target } from '../../types/types';
import { ControlGroup } from '../ControlGroup/ControlGroup';

export const Controls = (): JSX.Element => {
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const dispatch = useDispatch();

  const handleDeckColorClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeDeckColor(target.id));
      dispatch(changeTarget(Target.deckColor));
    },
    [changeDeckColor, changeTarget]
  );

  const handleWheelsColorClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeWheelsColor(target.id));
      dispatch(changeTarget(Target.wheelsColor));
    },
    [changeWheelsColor, changeTarget]
  );

  const handleDeckTextureClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeDeckTexture(target.id));
      dispatch(changeTarget(Target.texture));
    },
    [changeDeckTexture, changeTarget]
  );

  const handleBgColorInput = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatch(changeBgColor(target.value));
    setBgColorValue(target.value);
    dispatch(changeTarget(Target.bgColor));
  };

  return (
    <ul className={styles.controlsContainer}>
      <li>
        <h5>Background color</h5>
        <div className={styles.bgColorContainer}>
          <input type='color' id='bgColorInput' value={bgColorValue} onInput={handleBgColorInput} />
        </div>
      </li>
      <ControlGroup data={COLORS} title="Deck color" handleClick={handleDeckColorClick} isTextures={false} />
      <ControlGroup data={COLORS} title="Wheels color" handleClick={handleWheelsColorClick} isTextures={false} />
      <ControlGroup data={TEXTURES} title="Deck print" handleClick={handleDeckTextureClick} isTextures />
    </ul>
  );
};
