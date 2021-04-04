import React, { Component} from 'react';

export default class Card extends Component {

  state = {
    static: true,
    src: this.props.sta
  }

  changeSource = () => {
    let src = this.state.static ? this.props.src : this.props.sta
    this.setState({src: src, static: !this.state.static})
  }

  renderTags = () => {}

  render() {
    
    return (
      <div className="algo-card">
        <a href="/">
          <img
            className="card-img"
            src={this.state.src} 
            alt="please wait" 
            width="240px" 
            height="240px"
            onMouseEnter={this.changeSource}
            onMouseLeave={this.changeSource}
          />
        </a>
        <div className="card-name">
          <h5 className="card-info">
            <a href="/" className="card-link">
              {this.props.title}
            </a>
            <a href="/" className="card-link">Training</a>
          </h5>
          
        </div>
        <div className="tags">
          <span className="filter">array</span>
        </div>
      </div>
    )
  }
}
