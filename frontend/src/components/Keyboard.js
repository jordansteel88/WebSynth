// import React, { useState, useEffect, useMemo } from 'react';
import React, { useMemo } from 'react';
import './Keyboard.css';
import Key from './Key'
import { NOTES, N2K } from '../keyboardLayouts/1point5Octave';

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
    <div className="Piano">
      {keys}
    </div>
  ), [keys])
}

export default Keyboard;