import React, { useMemo } from 'react';
// import KeyboardContext from '../KeyboardContext';
import './Key.css';

const Key = ({ note, isFlat, capsLock }) => {
  let keyClassName = "Key";
  if (isFlat) keyClassName += "-flat";

  let keyTextClassName = "Key-text";
  if (isFlat) keyTextClassName += " u-white";
  if (capsLock) keyTextClassName += " capsLock"

  return useMemo( () => (
    <div id={note} className={keyClassName}>
      <div className={keyTextClassName}>
        {note}
      </div>
    </div>
  ), [note, keyClassName, keyTextClassName])
}

export default Key;