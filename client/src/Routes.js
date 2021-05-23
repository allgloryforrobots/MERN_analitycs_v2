import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export const Routes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)  
  if (isAuth) {
    return (
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Redirect to="/" />
          </Switch>
    )
  }

  return (
    <Switch>
        <Route path="/login" exact>
            <LoginPage />
        </Route>
        <Route path="/register" exact>
            <RegisterPage />
        </Route>
        <Redirect to="/login" />
    </Switch>
  )
}