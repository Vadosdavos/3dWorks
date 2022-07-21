import React, { SyntheticEvent, useState } from 'react';
import { TEX_NAME_END_INDEX, TEX_NAME_START_INDEX } from '../../constants/constants';
import styles from './ControlGroup.module.css';

type propsType = {
  data: string[];
  handleFunction: (event: SyntheticEvent) => void;
  children: JSX.Element;
  textures?: boolean;
};

export const ControlGroup = ({ data, handleFunction, children, textures = false }: propsType): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {children}
      <button className={`${styles.openBtn} ${isOpen ? styles.openBtnActive: ''}`} onClick={() => setIsOpen((prev) => !prev)}>
        &gt;
      </button>
      <ul
        className={`${textures ? styles.texturesContainer : styles.colorsContainer} ${
          !isOpen ? styles.closedContainer : ''
        }`}
      >
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
