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
          <button onClick={clickDown}>-</button>
          <button onClick={clickUp}>+</button>          
        </div>     
    </div>
  )
}

export default OctaveButtons;