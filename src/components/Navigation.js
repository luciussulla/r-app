import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
  {name: "star", 
   path: "/", 
   exact: true
  },
  {name: "products", 
   path: "/products"
  },
  {name: "contact", 
   path: "/contact"
  },
  {name: "admin", 
   path: "/admin"
  },
]

export default function Navigation() {
  const menu = list.map(item=> (
      <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
      </li>
  ))
    
  return (
    <div>
      <nav className="main">
        <ul>
          {menu}
        </ul>
      </nav>
    </div>
  )
}
