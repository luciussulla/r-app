import React from 'react'
import {Route, Switch} from 'react-router-dom'
import image1 from '../images/header1.jpg'
import image2 from '../images/header2.jpg'
import image3 from '../images/header3.jpg'
import '../styles/Header.css'

const Header = ()=> {
  const images = [image1, image2, image3]
  const index = Math.floor(Math.random()*images.length)
  const img = images[index]

  return (
    <>
    <Switch>
      <Route path="/" exact render={()=> (
        <img src={img} alt="image"/>
      )} />

      <Route path="/contact" render={()=> (
        <img src={img} alt="image"/>
      )} />

      <Route path="/products" render={()=> (
        <img src={img} alt="image"/>
      )} />

      <Route path="/admin" render={()=> (
        <img src={img} alt="image"/>
      )} />

      <Route render={()=> (
        <img src={img} alt="image"/>
      )} />
    </Switch>
    </>
  )
}

export default Header