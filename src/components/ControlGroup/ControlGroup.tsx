import React, { SyntheticEvent } from 'react';
import { TEX_NAME_END_INDEX, TEX_NAME_START_INDEX } from '../../constants/constants';
import styles from './ControlGroup.module.css';

type propsType = {
  data: string[];
  handleFunction: (event: SyntheticEvent) => void;
  children: JSX.Element;
  textures?: boolean;
};

export const ControlGroup = ({ data, handleFunction, children, textures = false }: propsType) => {
  return (
    <li>
      {children}
      <ul className={textures ? styles.texturesContainer : styles.colorsContainer}>
        {data.map((el) => (
          <li
            key={el}
            style={textures ? { backgroundImage: `url(${el})` } : { backgroundColor: el }}
            className={styles.controlItem}
            onClick={handleFunction}
            id={textures ? el.slice(el.length - TEX_NAME_START_INDEX, el.length - TEX_NAME_END_INDEX) : el}
          />
        ))}
      </ul>
    </li>
  );
};
