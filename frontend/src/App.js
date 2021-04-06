// import React, { useState, useEffect, useMemo, useCallback } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserContext from './auth/UserContext';
// import { attack, release } from './api/api';
// import Keyboard from './components/Keyboard'
import BackendApi from './api/api';
import Navigation from './routes/Navigation';
import Routes from './routes/Routes';
import jwt from "jsonwebtoken";

function App() { 
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userDataRetrieved, setUserDataRetrieved] = useState(false); 

  useEffect(function storeTokenInLS() {
    const initialValue = localStorage.getItem("token") || null;

    if (initialValue) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", token)
    }
  }, [token, currentUser])

  const register = async (data) => {
    try {
      let token = await BackendApi.register(data);
      console.log('after api call');
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error("Registration Failed", err);
      return {success: false, err};
    }
  }
  
  const login = async (data) => {
    try {
      let token = await BackendApi.login(data);
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error("Login Failed", err);
      return {success: false, err};
    }
  }
  
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(function getUserData() {
    const getCurrentUser = async () => {
      if (token) {
        try {
          BackendApi.token = token;
          let { username } = jwt.decode(token);
          let currentUser = await BackendApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("Problem retrieving user data", err);
          setCurrentUser(null);
        }
      }
      setUserDataRetrieved(true);
    }
    setUserDataRetrieved(false);
    getCurrentUser();
  }, [token]);

  if (!userDataRetrieved) return "Loading...";

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Navigation logout={logout} />  
          <div className="App-header">
            <Routes login={login} register={register} />
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
