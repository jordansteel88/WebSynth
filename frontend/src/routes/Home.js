import React from "react";
import "./Home.css";
import Keyboard from '../components/Keyboard';
import EffectsPanel from '../components/EffectsPanel';

const Home = () => {
  return (
    <div className="Home">
      <EffectsPanel /> 
      <Keyboard />
    </div>
  );
}

export default Home;

//currentUser undefined