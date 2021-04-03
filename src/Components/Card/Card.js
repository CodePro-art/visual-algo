import React, { Component} from 'react';

export default class Card extends Component {

  state = {
    src: this.props.sta
  }

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
            // onMouseEnter={this.setState({src: this.props.src})}
            // onMouseLeave={this.setState({src: this.props.sta})}
          />
        </a>
        <div className="card-name">
          <h5>{this.props.title}</h5>
        </div>
        <div className="tags">
          
        </div>
      </div>
    )
  }
}
