// import React, { useState, useEffect, useMemo, useCallback } from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { attack, release } from './api/api';
import Keyboard from './components/Keyboard'
import KeyboardContext from './KeyboardContext';

function App() {
  const [pressedKeys, setPressedKeys] = useState([]); 

  const handleKeydown = useCallback( (evt) => {
    if (evt.repeat) {
      return;
    }

    console.log(evt.key);

    const key = evt.key;
    setPressedKeys( [...pressedKeys, key.toUpperCase()] );
    
    attack(evt);
  }, [pressedKeys]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  });

  const handleKeyup = useCallback( (evt) => {
    const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
    setPressedKeys(removeKeyup);
    release(evt);
  }, [pressedKeys]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keyup', handleKeyup);
    }
  });

  return (
    <KeyboardContext.Provider value={pressedKeys}>
      <div className="App">
        <div className="App-header">
          <Keyboard 
            // handleKeydown={handleKeydown}
            // handleKeyup={handleKeyup}
          />  
        </div>
      </div>
    </KeyboardContext.Provider>
  );
}

export default App;
