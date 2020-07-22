import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Auth}  from '../../Auth/AuthDealer';
import { SingUp } from "../../Client/SingUp/SingUp";
import { auth } from '../../../services/Auth/AuthActions';

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Auth} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/login-admin" component={Auth} />
        <Route path="/sing-up" component={SingUp} />
      </Switch>
    </Router>
  )
}