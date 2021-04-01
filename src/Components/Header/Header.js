import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="algo-header">
        <nav className="navbar">
          <a href="/">
            VISU
            <span className="secondary">ALGO</span>
          </a>
        </nav>     
      </header>
    )
  }
}
