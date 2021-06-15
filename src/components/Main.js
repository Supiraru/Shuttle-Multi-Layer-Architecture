import React from 'react';
import Register from './register/Register';
import Login from './login/Login';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
      </Switch>
    </div>
  );
}

export default Main;
