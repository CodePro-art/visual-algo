import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="algo-header">
        <nav className="navbar">
          <a className="logo" href="/">
            <span className="primery">VISU</span>
            <span className="secondary">ALGO</span>
          </a>

          <div className="right-side-nav">|
            <a href="/about/">About</a> |
            <a href="/login/">Login</a>
          </div>
          
        </nav>     
      </header>
    )
  }
}
