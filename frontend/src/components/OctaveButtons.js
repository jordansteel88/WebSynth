import React, { useEffect, useState } from 'react';
import './OctaveButtons.css';

const OctaveButtons = ({controls, callback}) => {
  const [octave, setOctave] = useState(controls); 

  useEffect(() => {
    console.log(octave);
    callback(octave)
  }, [callback, octave])

  const clickUp = () => {
    setOctave(octave + 1);
  }  
  
  const clickDown = () => {
    setOctave(octave - 1);
  }

  return (
    <div className="octave">
      <h4>Octave</h4>
        <div className="WaveformForm-radios">
          <button name="down" onClick={clickDown}>-</button>
          <button name="up" onClick={clickUp}>+</button>          
        </div>     
    </div>
  )
}

export default OctaveButtons;