import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
      <div className="title-logo">
        <a className="lg-logo" href="/">
          <span className="primery">VISU</span> 
          <span className="secondary">ALGO</span>
        </a>
        <p className="subtext">visualising data structures and algorithms through animation</p>
      </div>
    )
  }
}
