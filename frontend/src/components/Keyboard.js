// import React, { useState, useEffect, useMemo } from 'react';
import React, { useMemo } from 'react';
import './Keyboard.css';
import Key from './Key'
// import { attack, release } from '../api/api';
import { NOTES, N2K } from '../keyboardLayouts/1point5Octave';

const Keyboard = () => {
  // const [pressedKeys, setPressedKeys] = useState([]); 

  // useEffect(() => {
  //   const handleKeydown = (evt) => {
  //     if (evt.repeat) {
  //       return;
  //     }

  //     console.log(evt.key);

  //     const key = evt.key;
  //     setPressedKeys( [...pressedKeys, key.toUpperCase()] );
      
  //     attack(evt);
  //   } 

  //   window.addEventListener('keydown', handleKeydown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeydown)
  //   }
  // });

  // useEffect(() => {
  //   const handleKeyup = (evt) => {
  //     const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
  //     setPressedKeys(removeKeyup);
  //     release(evt);
  //   }

  //   window.addEventListener('keyup', handleKeyup);
  //   return () => {
  //     window.removeEventListener('keyup', handleKeyup);
  //   }
  // });

  // console.log(pressedKeys);
  console.log('Keyboard render');
  

  const keys = NOTES.map(key => {
    return (
      <Key 
        key={key}
        note={N2K[key]}
        isFlat={key.length > 2}
        capsLock={N2K[key] === "CAPSLOCK"}
      />
    )
  })

  return useMemo( () => (
    <div className="Piano">
      {keys}
    </div>
  ), [keys])
}

export default Keyboard;