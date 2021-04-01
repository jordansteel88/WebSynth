// import React, { useState, useEffect, useMemo, useCallback } from 'react';
import React, { useEffect} from 'react';
import './App.css';
import { attack, release } from './api/api';
import Keyboard from './components/Keyboard'
// import KeyboardContext from './KeyboardContext';

function App() {
  useEffect(() => {
    const handleKeydown = (evt) => {
      if (evt.repeat) {
        return;
      }

      console.log(evt.key.toUpperCase());
      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList += ' pressed';

      attack(evt);
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, []);

  useEffect(() => {
    const handleKeyup = (evt) => {
      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList.remove('pressed');

      release(evt);
    };

    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keyup', handleKeyup);
    }
  }, []);

  return (
      <div className="App">
        <div className="App-header">
          <Keyboard />  
        </div>
      </div>
  )
}


export default App;
