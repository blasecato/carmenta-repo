import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Home}  from '../../Client/Home/Home';
import  {Store}  from '../../Client/Store/Store';
import  {DetailCar}  from '../../Client/DetailCar/DetailCar';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../services/Auth/AuthActions';
import { user as userActions , user } from '../../../services/User/UserActions'


export const Private = () => {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
	const [email,setEmail] = useState(users.email)

	useEffect(() => {
		if(users){
			setEmail(users.email)
		}
  }, [])

  console.log("user",users)
  

  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route exact path="/home-log" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/detail-car/:id" component={DetailCar} />
      </Switch>
    </Router>
  )
}