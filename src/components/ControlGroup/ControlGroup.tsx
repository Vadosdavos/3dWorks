import React, { SyntheticEvent, useState } from 'react';
import { TEX_NAME_END_INDEX, TEX_NAME_START_INDEX } from '../../constants/constants';
import styles from './ControlGroup.module.css';

type ControlGroupProps = {
  data: string[];
  title: string;
  handleClick: (event: SyntheticEvent) => void;
  isTextures: boolean;
};

export const ControlGroup = ({ data, handleClick, title, isTextures }: ControlGroupProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <h5>{title}</h5>
      <button className={`${styles.openBtn} ${isOpen ? styles.openBtnActive : ''}`} onClick={() => setIsOpen((prev) => !prev)}>
        &gt;
      </button>
      <ul
        className={`${isTextures ? styles.texturesContainer : styles.colorsContainer} ${!isOpen ? styles.closedContainer : ''
          }`}
      >
        {data.map((el) => (
          <li
            key={el}
            style={isTextures ? { backgroundImage: `url(${el})` } : { backgroundColor: el }}
            className={styles.controlItem}
            onClick={handleClick}
            id={isTextures ? el.slice(el.length - TEX_NAME_START_INDEX, el.length - TEX_NAME_END_INDEX) : el}
          />
        ))}
      </ul>
    </li>
  );
};
