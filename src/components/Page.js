import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProductListPage from '../pages/ProductListPage'
import ProductPage from '../pages/ProductPage'

export default function Page() {
  return (
    <>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/admin" component={AdminPage} />
        <Route  path="/products/:id" component={ProductPage} />
        <Route  path="/products" component={ProductListPage} />
        <Route  path="/contact" component={ContactPage} />
        <Route  path="/login" component={LoginPage} />
        <Route  component={ErrorPage} />
      </Switch>
    </>
  )
}
