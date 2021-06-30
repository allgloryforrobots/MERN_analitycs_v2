import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OverviewPage from './pages/OverviewPage'
import AssortmentPage from './pages/AssortmentPage/AssortmentPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import HistoryPage from './pages/HistoryPage'
import AnalitycsPage from './pages/AnalitycsPage/AnalitycsPage'
import OrderIdPage from './pages/OrderIdPage'
import RegisterRedirect from './components/RegisterRedirect'

export const Routes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)  
  const registerRedirect = useSelector((state) => state.register.registerRedirect)  

  if (isAuth) {
    return (
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/overview" exact>
              <OverviewPage />
            </Route>
            <Route path="/categories/:id" >
              <AssortmentPage />
            </Route>
            <Route path="/categories" exact>
              <CategoriesPage />
            </Route>
            <Route path="/analitycs" exact>
              <AnalitycsPage />
            </Route>
            <Route path="/history" exact>
              <HistoryPage />
            </Route>
            <Route path="/orders" exact>
              <OrdersPage />
            </Route>
            <Route path="/orders/:id">
              <OrderIdPage />
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
            {registerRedirect && <RegisterRedirect/>}
            <RegisterPage />
        </Route>
        <Redirect to="/login" />
    </Switch>
  )
}