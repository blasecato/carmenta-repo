import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Login } from '../../Auth/Login';

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Login} />
        <Route path="*" component={Login} />
      </Switch>
    </Router>
  )
}