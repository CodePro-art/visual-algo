import React, { Component } from 'react'

export default class Tile extends Component {
  render() {
    return (
      <div className="tile" style={{backgroundColor: this.props.color, height: this.props.height*4}}>
        <h4>{this.props.height}</h4>
      </div>
    )
  }
}
