import React from 'react'
import { LoginBackoffice } from './Admin/LoginBackoffice'
import { LoginDealer } from './Dealer/LoginDealer'
import { Tabs } from 'antd'

const { TabPane } = Tabs;

export const Auth = ({ location,history }) => {
  
  return (
    <div>
      {location.pathname !== '/login-admin' && <LoginDealer history={history} />}
      {location.pathname === '/login-admin' && <LoginBackoffice history={history} />}
      
    </div>
  )
}