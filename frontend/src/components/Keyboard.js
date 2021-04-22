import React, { useMemo } from 'react';
import './Keyboard.css';
import Key from './Key'
import { NOTES, N2K } from '../constants/layout';
// import { playSynth } from '../tone/playSynth';

// let keyCount = 0;

const Keyboard = () => {
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
    <div className="Keyboard">
      {keys}
    </div>
  ), [keys])
}

export default Keyboard;