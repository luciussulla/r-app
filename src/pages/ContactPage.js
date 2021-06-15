import React, { Component } from 'react'
import "../styles/ContactPage.css"
import {Prompt} from 'react-router-dom'

class Contact extends Component {
  state = {
    value: "", 
    isEmpty: true
  }

  handleChange = (e)=> {
    if(e.target.value.length>0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      })
      console.log("is empty should be false")
    } else {
      this.setState({
        value: "",
        isEmpty: true,
      })
    }
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    this.setState({
      value: "", 
      isEmpty: true
    })
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt 
          when={!this.state.isEmpty}
          message= "Masz niewypelniony form czy na pewno chcesz opuscic ta strone"
        />
      </div>
    )
  }
}

export default Contact