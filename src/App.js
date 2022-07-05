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
      <header className='header'>
        <div className='button'>
          <input type='radio' name='shapeType' id='cube' onChange={handleInputChange} value='cube'></input>
          <label className='labelBtn' htmlFor='cube'>
            Cube
          </label>
        </div>
        <div className='button'>
          <input type='radio' name='shapeType' id='sphere' onChange={handleInputChange} value='sphere'></input>
          <label className='labelBtn' htmlFor='sphere'>
            Sphere
          </label>
        </div>
        <div className='button'>
          <input
            type='radio'
            name='shapeType'
            id='tetrahedron'
            onChange={handleInputChange}
            value='tetrahedron'
          ></input>
          <label className='labelBtn' htmlFor='tetrahedron'>
            Tetrahedron
          </label>
        </div>
      </header>
      <RenderingItem type={shape} />
      {/* <Line /> */}
      <Model />
    </>
  );
};
