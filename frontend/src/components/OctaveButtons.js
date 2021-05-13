import React, { useEffect, useContext } from 'react';
import './OctaveButtons.css';

import SettingsContext from '../utilities/SettingsContext';

const OctaveButtons = () => {
  const { octave, setOctave } = useContext(SettingsContext); 

  useEffect(() => {
    console.log(octave);
    setOctave(octave)
  }, [setOctave, octave])

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