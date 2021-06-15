import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const permission = false

export default function AdminPage() {
  return (
    <div>
      <Route render={()=> (
        permission ? (<h3>Panel Admina - dzień dobry</h3>) : (<Redirect to="/login"/>) 
      )} />
    </div>
  )
}
