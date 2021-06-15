import React, { Component } from 'react'
import Article from '../components/Article'
const articles = [
  {
    id:1, 
    title: "Czym jest teoria strun", 
    author: "Jan Nowak", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eveniet perspiciatis magnam inventore odit iure architecto nesciunt maiores voluptatem repellendus ipsa in dicta, maxime aspernatur et magni, deserunt quaerat obcaecati!"
  }, 
  {
    id:2, 
    title: "Czym jest teoria strun", 
    author: "Jan Nowak", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eveniet perspiciatis magnam inventore odit iure architecto nesciunt maiores voluptatem repellendus ipsa in dicta, maxime aspernatur et magni, deserunt quaerat obcaecati!"
  }, 
  {
    id:3, 
    title: "Kto to jest James Bond;", 
    author: "Bożena Stasiak", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eveniet perspiciatis magnam inventore odit iure architecto nesciunt maiores voluptatem repellendus ipsa in dicta, maxime aspernatur et magni, deserunt quaerat obcaecati!"
  }, 
  {
    id:4, 
    title: "Chiny czy USA", 
    author: "Mikołaj Anioł", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eveniet perspiciatis magnam inventore odit iure architecto nesciunt maiores voluptatem repellendus ipsa in dicta, maxime aspernatur et magni, deserunt quaerat obcaecati!"
  }, 
  
]

export default function HomePage() {
  const artList = articles.map(article=> (
    <Article key={article.id} {...article} />
  ))

  return (
    <div className="home">
        {artList}
    </div>
  )
}
