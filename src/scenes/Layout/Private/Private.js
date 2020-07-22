import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Home}  from '../../Client/Home/Home';

export const Private = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route exact path="/home-log" component={Home} />
      </Switch>
    </Router>
  )
}