import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import Profile from './Profile';

const Routes = ({ login, register, loadProfile }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route> 

        <Route exact path="/register">
          <RegisterForm register={register} />
        </Route>  

        <Route exact path="/profiles/:currentUser">
          <Profile loadProfile={loadProfile} />
        </Route> 

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;