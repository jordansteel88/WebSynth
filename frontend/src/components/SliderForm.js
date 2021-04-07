import React, { useState } from 'react';
import './SliderForm.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import SynthContext from '../tone/SynthContext';

const SliderForm = ({controls, callback}) => {
  // const { getSynthParams } = useContext(SynthContext);

  const [levels, setLevels] = useState(controls);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setLevels(formData => ({
      ...formData,
      [name]: parseFloat(value)
    }));
  }

  const mouseUp = () => {
    callback(levels)
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
                 onMouseUp={mouseUp}
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
    </div>

  )
}

export default SliderForm;