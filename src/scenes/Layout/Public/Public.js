import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Login } from '../../Auth/Login';
import { SingUp } from "../../Client/SingUp/SingUp";

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/sing-up" component={SingUp} />
      </Switch>
    </Router>
  )
}