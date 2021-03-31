import React, { useMemo, useContext } from 'react';
import KeyboardContext from '../KeyboardContext';
import './Key.css';
import { N2K } from '../keyboardLayouts/1point5Octave';

const Key = ({ note, isFlat, capsLock }) => {
  const pressedKeys = useContext(KeyboardContext);
  let isPressed = pressedKeys.includes(N2K[note])

  let keyClassName = "Key";
  if (isFlat) keyClassName += "-flat";
  if (isPressed) keyClassName += " pressed"

  let keyTextClassName = "Key-text";
  if (isFlat) keyTextClassName += " u-white";
  if (capsLock) keyTextClassName += " capsLock"
  console.log('Key render');

  return useMemo( () => (
    <div className={keyClassName}>
      <div className={keyTextClassName}>
        {note}
      </div>
    </div>
  ), [note, keyClassName, keyTextClassName]
  )
}

export default Key;