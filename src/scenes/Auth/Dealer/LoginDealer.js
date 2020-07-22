import React from 'react';
import  Login  from "../Login/Login";


export const LoginDealer = ({history}) => {

  return (  
    <div>
      <Login rol={'dealer'} title="Cliente" history={history}/>
    </div>
  )
}