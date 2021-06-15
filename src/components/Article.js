import React from 'react'

export default function Article({id, author, title, text}) {
  const styles = {
    marginTop: 40
  }

  return (
    <div>
      <article style={styles}>
        <h3 style={{marginBottom: 4, textTransform: "uppercase"}}>{title}</h3>
        <span style={{display: "block", fontSize: 12, marginBottom: 10}}>{author}</span>
        <p style={{fontSize: 15}}>{text}</p>
      </article>
    </div>
  )
}
