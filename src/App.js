import './App.css';
import React, { useCallback, useState } from 'react';
import { RenderingItem } from './components/RenderingItem/RenderingItem';
import { Line } from './components/Line/Line';
import { Model } from './components/3dmodel/3dmodel';

export const App = () => {
  const [shape, setShape] = useState('cube');
  const handleInputChange = useCallback(
    (event) => {
      const target = event.target;
      setShape(target.value);
    },
    [shape, setShape]
  );

  return (
    <>
      <div className='app'>
        <label>
          <input type='radio' name='shapeType' onChange={handleInputChange} value='cube'></input>Cube
        </label>
        <label>
          <input type='radio' name='shapeType' onChange={handleInputChange} value='sphere'></input>Sphere
        </label>
        <label>
          <input type='radio' name='shapeType' onChange={handleInputChange} value='tetrahedron'></input>Tetrahedron
        </label>
      </div>
      <RenderingItem type={shape} />
      <Line />
      <Model />
    </>
  );
};
