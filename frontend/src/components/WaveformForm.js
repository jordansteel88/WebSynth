import React from 'react';
import './WaveformForm.css';

const WaveformForm = ({controls, callback}) => {
  // const [waveform, setWaveform] = useState(controls);

  const handleChange = evt => {
    const { value } = evt.target;
    console.log("form value: " + value);
    callback(value);
  }

  return (
    <div className="waveform">
      <h4>Waveform</h4>
        <div className="WaveformForm-radios"
             onChange={handleChange}>
              <input type="radio" 
                     id="sine" 
                     name="waveform" 
                     value="sine"/>
              <label htmlFor="sine">Sine</label>

              <input type="radio" 
                     id="triangle" 
                     name="waveform" 
                     value="triangle"/>
              <label htmlFor="triangle">Triangle</label>                 
              
              <input type="radio" 
                     id="sawtooth" 
                     name="waveform" 
                     value="sawtooth"/>
              <label htmlFor="sawtooth">Sawtooth</label>                 
              
              <input type="radio" 
                     id="square" 
                     name="waveform" 
                     value="square"/>
              <label htmlFor="square">Square</label>


              {/* <label htmlFor="sine">
                <input type="radio" 
                  id="sine" 
                  name="waveform" 
                  value="sine"/>
                <img src="../../public/icons/sine.png"
                     alt="sine wave"></img>
              </label>

              <label htmlFor="triangle">
                <input type="radio" 
                      id="triangle" 
                      name="waveform" 
                      value="triangle"/>
                <img src="../../public/icons/triangle.png"
                     alt="triangle wave"></img>
              </label>                 
              
              <label htmlFor="sawtooth">
                <input type="radio" 
                    id="sawtooth" 
                    name="waveform" 
                    value="sawtooth"/> 
                <img src="../../public/icons/sawtooth.png"
                     alt="sawtooth wave"></img>
              </label>                 
              
              <label htmlFor="square">
                <input type="radio" 
                      id="square" 
                      name="waveform" 
                      value="square"/> 
                <img src="../../public/icons/square.png"
                     alt="square wave"></img>
              </label>             */}
        </div>     
    </div>
  )
}

export default WaveformForm;