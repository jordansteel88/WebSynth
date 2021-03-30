import React, { useState, useEffect } from 'react';
import './Keyboard.css';
import Key from './Key'
import { attack, release } from '../api/api';
import { NOTES, N2K } from '../keyboardLayouts/1point5Octave';

const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = useState([]); 

  useEffect(() => {
    const handleKeydown = (evt) => {
      if (evt.repeat) {
        return;
      }

      console.log(evt.key);

      const key = evt.key;
      setPressedKeys( [...pressedKeys, key.toUpperCase()] );
      
      attack(evt);
    } 

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [pressedKeys]);

  useEffect(() => {
    const handleKeyup = (evt) => {
      const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
      setPressedKeys(removeKeyup);
      release(evt);
    }

    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keyup', handleKeyup);
    }
  }, [pressedKeys]);

  console.log(pressedKeys);
  

  const keys = NOTES.map(key => {
    return (
      <Key 
        key={key}
        note={N2K[key]}
        isFlat={key.length > 2}
        isPressed={pressedKeys.includes(N2K[key])}
        capsLock={N2K[key] === "CAPSLOCK"}
      />
    )
  })

  return (
    <div className="Piano">
      {keys}
    </div>
  )
}

export default Keyboard;