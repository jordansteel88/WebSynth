import React, {useState} from 'react';
import './WaveformForm.css';

const WaveformForm = ({controls, callback}) => {
  // const [waveform, setWaveform] = useState(controls);
  const [checked, setChecked] = useState('sine');

  const handleChange = evt => {
    const { value } = evt.target;
    console.log("form value: " + value);
    callback(value);
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
                     />
              <label htmlFor="sine">Sine</label>

              <input type="radio" 
                     id="triangle" 
                     name="waveform" 
                     value="triangle"
                     checked={checked === 'triangle'}
                     onClick={handleClick}
                     />
              <label htmlFor="triangle">Triangle</label>                 
              
              <input type="radio" 
                     id="sawtooth" 
                     name="waveform" 
                     value="sawtooth"
                     checked={checked === 'sawtooth'}
                     onClick={handleClick}
                     />
              <label htmlFor="sawtooth">Sawtooth</label>                 
              
              <input type="radio" 
                     id="square" 
                     name="waveform" 
                     value="square"
                     checked={checked === 'square'}
                     onClick={handleClick}
                     />
              <label htmlFor="square">Square</label>
        </div>     
    </div>
  )
}

export default WaveformForm;