import React, { useContext } from 'react';
import './SliderForm.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import SettingsContext from '../utilities/SettingsContext';

const SliderForm = () => {
  const {levels, setLevels} = useContext(SettingsContext);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setLevels(formData => ({
      ...formData,
      [name]: parseFloat(value)
    }));
    console.log(levels);
  }

  const mouseUp = () => {
    setLevels(levels)
  }

  return (
    <div className="envelope">
      <h4>Envelope</h4>
      <Form className="SliderForm">        
        <FormGroup className="SliderForm-group">
          <Label htmlFor="attack" className="SliderForm-label small">Attack</Label>
          <Input id="attack" 
                 name="attack" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onMouseUp={mouseUp}
                 onChange={handleChange}
                 value={levels.attack}>
          </Input>
        </FormGroup>        
        <FormGroup className="SliderForm-group">
          <Label htmlFor="decay" className="SliderForm-label small">Decay</Label>
          <Input id="decay"
                 name="decay"  
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0" 
                 max="1"
                 onMouseUp={mouseUp}
                 onChange={handleChange}
                 value={levels.decay}>
          </Input>
        </FormGroup>        
        <FormGroup className="SliderForm-group">
          <Label htmlFor="sustain" className="SliderForm-label small">Sus</Label>
          <Input id="sustain" 
                 name="sustain" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0.01" 
                 max="0.99"
                 onMouseUp={mouseUp}
                 onChange={handleChange}
                 value={levels.sustain}>
          </Input>        
        </FormGroup>        
        <FormGroup className="SliderForm-group">
          <Label htmlFor="release" className="SliderForm-label small">Release</Label>
          <Input id="release"
                 name="release"  
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="0.01" 
                 max="0.99"
                 onMouseUp={mouseUp}
                 onChange={handleChange}
                 value={levels.release}>
          </Input>        
        </FormGroup>
        <FormGroup className="SliderForm-group">
          <Label htmlFor="gain" className="SliderForm-label small">Amp</Label>
          <Input id="gain"
                 name="gain" 
                 className="SliderForm-input" 
                 orient="vertical" 
                 type="range" 
                 step="0.01" 
                 min="-30" 
                 max="10"
                 onMouseUp={mouseUp}
                 onChange={handleChange}
                 value={levels.gain}>
          </Input>
        </FormGroup>
      </Form>
    </div>
  )
}

export default SliderForm;