import React, {useState, useContext} from 'react';
import './WaveformForm.css';

import SettingsContext from '../utilities/SettingsContext';

const WaveformForm = () => {
  const { setWaveform } = useContext(SettingsContext);
  const [checked, setChecked] = useState('sine');

  const handleChange = evt => {
    const { value } = evt.target;
    console.log("form value: " + value);
    setWaveform(value);
  }

  const handleClick = (evt) => {
    setChecked(evt.target.value);
  }

  return (
    <div className="waveform">
      <h4>Waveform</h4>
        <div className="WaveformForm-radios"
             onChange={handleChange}>
              <input type="radio" 
                     id="sine" 
                     name="waveform" 
                     value="sine"
                     checked={checked === 'sine'}
                     onClick={handleClick}
                     readOnly
                     />
              <label htmlFor="sine">Sine</label>

              <input type="radio" 
                     id="triangle" 
                     name="waveform" 
                     value="triangle"
                     checked={checked === 'triangle'}
                     onClick={handleClick}
                     readOnly
                     />
              <label htmlFor="triangle">Triangle</label>                 
              
              <input type="radio" 
                     id="sawtooth" 
                     name="waveform" 
                     value="sawtooth"
                     checked={checked === 'sawtooth'}
                     onClick={handleClick}
                     readOnly
                     />
              <label htmlFor="sawtooth">Sawtooth</label>                 
              
              <input type="radio" 
                     id="square" 
                     name="waveform" 
                     value="square"
                     checked={checked === 'square'}
                     onClick={handleClick}
                     readOnly
                     />
              <label htmlFor="square">Square</label>
        </div>     
    </div>
  )
}

export default WaveformForm;