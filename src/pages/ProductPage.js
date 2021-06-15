import React from 'react'
import Product from '../components/Product'
import {Link} from 'react-router-dom'

export default function ProductPage({match}) {
  console.log(match.params.id)
  return (
    <>
      <div>Strona produktuy</div>
      <Product id={match.params.id} />
      <Link to='/products'>Powrót do listy produktow</Link>
    </>
  )
}
