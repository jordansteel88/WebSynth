import React, { useContext } from "react";
import "./Home.css";
import UserContext from "../auth/UserContext";
// import SynthContext from '../tone/SynthContext';
import Keyboard from '../components/Keyboard';
import EffectsPanel from '../components/EffectsPanel';
// import * as Tone from 'tone';

const Home = () => {
  // const LEVELS_INITIAL_STATE = {
  //   gain: 0,
  //   attack: 0.5,
  //   decay: 0.5,
  //   sustain: 0.5,
  //   release: 0.5
  // }

  // // const SYNTH_INITIAL_STATE = new Tone.PolySynth(
  // //     Tone.MonoSynth, {
  // //       oscillator: {type: "triangle"},
  // //       envelope: {
  // //         attack: 0.5,
  // //         decay: 0.5,
  // //         sustain: 0.5,
  // //         release: 0.5
  // //       }
  // //     }
  // //   ).toDestination();

  // const [synthParams, setSynthParams] = useState(LEVELS_INITIAL_STATE);
  // // const [synth, setSynth] = useState(SYNTH_INITIAL_STATE);
  const { currentUser } = useContext(UserContext);

  // const getSynthParams = (levelsObj) => {
  //   setSynthParams(levelsObj);
  // }

  // const configureSynth = (obj) => {
  //   let synth = new Tone.PolySynth(
  //     Tone.MonoSynth, {
  //       oscillator: {type: "triangle"},
  //       envelope: {
  //         attack: obj.attack,
  //         decay: obj.decay,
  //         sustain: obj.sustain,
  //         release: obj.release
  //       }
  //     }
  //   ).toDestination();
  //   synth.volume.value = obj.gain;  

  //   return synth;
  // }  
  // // console.log('****** synthParams **********');
  // // console.log(synthParams);
  // // console.log('****** synthParams **********');

  // useEffect(() => {
  //   configureSynth(synthParams);
  //   // setSynth(configureSynth(synthParams))
  // }, [synthParams])


  // let synth = configureSynth(synthParams);

  return (
    // <SynthContext.Provider value={{ getSynthParams }}>
      <div className="Home">
        {!currentUser 
        ? <h2 className="Home-header">Log in or sign up to access more features!</h2>
        : <EffectsPanel /> }
        <Keyboard />
      </div>
    // </SynthContext.Provider>

  );
}

export default Home;