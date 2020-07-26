import React from 'react';
import  Login  from "../Login/Login";


export const LoginDealer = ({history}) => {

  return (  
    <div>
      <Login rol={'cliente'} title="Cliente" history={history}/>
    </div>
  )
}