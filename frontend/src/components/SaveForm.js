// import React, { useContext, useState, useRef, useEffect } from 'react';
import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'reactstrap';
import SettingsContext from '../utilities/SettingsContext';
import BackendApi from '../api/api';
import UserContext from '../auth/UserContext';

const SaveForm = () => {
  const { currentUser } = useContext(UserContext);
  const { levels, waveform, octave } = useContext(SettingsContext);
  const [profileName, setProfileName] = useState("");

  // const inputElement = useRef(null);

  // useEffect(() => {
  //   if (inputElement.current) {
  //     inputElement.current.focus();
  //   }
  // }, []);

  const handleChange = evt => {
    evt.stopPropagation();
    const { name, value } = evt.target;
    setProfileName(formData => ({
      ...formData,
      [name]: value
    }));
    console.log(name);
  }

  const submit = async () => {
    console.log(levels);
    console.log(waveform);
    console.log(octave);

    let data = {
      username: currentUser.username,
      profile_name: profileName,
      effects: {
        gain: levels.gain, 
        attack: levels.attack, 
        decay: levels.decay, 
        sustain: levels.sustain, 
        release: levels.release,
        waveform: waveform,
        octave: octave
      } 
    }

    await BackendApi.saveProfile(data)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  
  return currentUser ? (
    <div className="SaveForm-container">
      <Form className="SaveForm mt-5 w-50 d-inline">        
        <div className="input-group mt-5 mx-auto w-50">
          <Input type="text"
                 id="name"
                 name="name" 
                //  ref={inputElement}
                 className="form-control SaveForm-input" 
                 placeholder="Enter a name for your profile..."
                 aria-label="save profile" 
                 aria-describedby="button-save-profile"
                 onChange={handleChange}
                 value={profileName}>
          </Input>
          <Button className="btn" 
                  type="button" 
                  id="button-save-profile"
                  color="primary"
                  onClick={handleSubmit}>
            Save Profile
          </Button>
        </div>
      </Form>
    </div>
  ) : null;
}

export default SaveForm;