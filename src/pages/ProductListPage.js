import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'

const products = ["car", "bike", "motorcycle"]

export default function ProductListPage() {
  const list = products.map( product => (
    <li key={product}>
      <Link to={`/products/${product}`}>{product}</Link>
    </li>
  ))

  return (
    <>
    <div className="products">
      <h2> Lista produktow </h2>
      <ul>{list}</ul>
    </div>
    </>
  )
}
