import React from 'react'
import {Route} from 'react-router-dom'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div>
      <h2>Stopka</h2>
      <Route path="/" exact render={(props)=> (
          <p>Jesteś na <span>stronie głównej</span></p>
        )
      }/>

      <Route path="/:page" exact render={(props)=> (
        <>
          <p>Jesteś na <span>{props.match.params.page}</span></p>
          <p>Jesteś na <span>{props.match.url}</span></p>
          <p>Jesteś na <span>{props.match.path}</span></p>
        </>  
      )
      }/>

      <Route path="/:page/:idProduct" exact render={(props)=> (
        <>
          <p>Jesteś na <span>{props.match.params.page}</span></p>
          <p>Jesteś na <span>{props.match.url}</span></p>
          <p>Jesteś na <span>{props.match.path}</span></p>
        </>  
      )
      }/>

    </div>
  )
}
