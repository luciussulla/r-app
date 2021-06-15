import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import ProductPage from '../pages/ProductPage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'

export default function Page() {
  return (
    <>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/admin" component={AdminPage} />
        <Route  path="/products" component={ProductPage} />
        <Route  path="/contact" component={ContactPage} />
        <Route  path="/login" component={LoginPage} />
        <Route  component={ErrorPage} />
      </Switch>
    </>
  )
}
