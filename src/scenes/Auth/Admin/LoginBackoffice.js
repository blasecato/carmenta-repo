import React from 'react';
import Login  from "../Login/Login";

export const LoginBackoffice = ({history}) => {

  return (
    <div>
      <Login rol={'admin'} title="Administrador" history={history}/>
    </div>
  )
}