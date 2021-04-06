import React, { useState } from 'react';
import './SliderForm.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import SynthContext from '../tone/SynthContext';
import Synth from './Synth';

const SliderForm = () => {
  // const { getSynthParams } = useContext(SynthContext);

  const INITIAL_STATE = {
    gain: 0,
    attack: 0.5,
    decay: 0.5,
    sustain: 0.5,
    release: 0.5
  }

  const [levels, setLevels] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setLevels(formData => ({
      ...formData,
      [name]: parseFloat(value)
    }));
  }

  // useEffect(() => {
  //   getSynthParams(levels);
  // }, [getSynthParams, levels])

  return (
    <div>
      <Form>
        <FormGroup className="Slider-group">
          <Label htmlFor="gain" className="SliderForm-label">Gain</Label>
          <Input id="gain"
                 name="gain" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="-20" 
                 max="20"
                 onChange={handleChange}
                 value={levels.gain}>
          </Input>
        </FormGroup>        
        <FormGroup className="Slider-group">
          <Label htmlFor="attack" className="SliderForm-label">Attack</Label>
          <Input id="attack" 
                 name="attack" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onChange={handleChange}
                 value={levels.attack}>
          </Input>
        </FormGroup>        
        <FormGroup className="Slider-group">
          <Label htmlFor="decay" className="SliderForm-label">Decay</Label>
          <Input id="decay"
                 name="decay"  
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onChange={handleChange}
                 value={levels.decay}>
          </Input>
        </FormGroup>        
        <FormGroup className="Slider-group">
          <Label htmlFor="sustain" className="SliderForm-label">Sustain</Label>
          <Input id="sustain" 
                 name="sustain" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onChange={handleChange}
                 value={levels.sustain}>
          </Input>        
        </FormGroup>        
        <FormGroup className="Slider-group">
          <Label htmlFor="release" className="SliderForm-label">Release</Label>
          <Input id="release"
                 name="release"  
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onChange={handleChange}
                 value={levels.release}>
          </Input>        
        </FormGroup>
      </Form>
      <Synth levels={levels}/>
    </div>

  )
}

export default SliderForm;