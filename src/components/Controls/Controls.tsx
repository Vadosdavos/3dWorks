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
import { TargetType } from '../../constants/types';
import { ControlGroup } from '../ControlGroup/ControlGroup';

export const Controls = (): JSX.Element => {
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const dispatch = useDispatch();

  const handleDeckColorClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeDeckColor(target.id));
      dispatch(changeTarget(TargetType.deckColor));
    },
    [changeDeckColor, changeTarget]
  );

  const handleWheelsColorClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeWheelsColor(target.id));
      dispatch(changeTarget(TargetType.wheelsColor));
    },
    [changeWheelsColor, changeTarget]
  );

  const handleDeckTextureClick = useCallback(
    (event: SyntheticEvent): void => {
      const target = event.target as HTMLDivElement;
      dispatch(changeDeckTexture(target.id));
      dispatch(changeTarget(TargetType.texture));
    },
    [changeDeckTexture, changeTarget]
  );

  const handleBgColorInput = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatch(changeBgColor(target.value));
    setBgColorValue(target.value);
    dispatch(changeTarget(TargetType.bgColor));
  };

  return (
    <ul className={styles.controlsContainer}>
      <li>
        <h5>Background color</h5>
        <div className={styles.bgColorContainer}>
          <input type='color' id='bgColorInput' value={bgColorValue} onInput={handleBgColorInput} />
        </div>
      </li>
      <ControlGroup data={COLORS} handleFunction={handleDeckColorClick}>
        <h5>Deck color</h5>
      </ControlGroup>
      <ControlGroup data={COLORS} handleFunction={handleWheelsColorClick}>
        <h5>Wheels color</h5>
      </ControlGroup>
      <ControlGroup data={TEXTURES} handleFunction={handleDeckTextureClick} textures={true}>
        <h5 className={styles.lastTitle}>Deck print</h5>
      </ControlGroup>
    </ul>
  );
};
