import React from 'react';
import './Key.css';

const Key = ({ note, isFlat, isPressed, capsLock }) => {
  let keyClassName = "Key";
  if (isFlat) keyClassName += "-flat";
  if (isPressed) keyClassName += " pressed"

  let keyTextClassName = "Key-text";
  if (isFlat) keyTextClassName += " u-white";
  if (capsLock) keyTextClassName += " capsLock"
  console.log('Key render');

  return (
    <div className={keyClassName}>
      <div className={keyTextClassName}>
        {note}
      </div>
    </div>
  )
}

export default Key;