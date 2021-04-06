import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {

  state = {
    static: true,
    src: this.props.sta
  }

  changeSource = () => {
    let src = this.state.static ? this.props.src : this.props.sta
    this.setState({src: src, static: !this.state.static})
  }

  renderTags = arr => arr.map((tag,i) => <span key={i} className="filter">{tag}</span>)

  render() {
    
    return (
      <div className="algo-card">
        <Link to={`/page/${this.props.link}`} id={this.props.link}>
          <img
            className="card-img"
            src={this.state.src} 
            alt="please wait" 
            width="240px" 
            height="240px"
            onMouseEnter={this.changeSource}
            onMouseLeave={this.changeSource}
          />
        </Link>
        <div className="card-name">
          <h5 className="card-info">
            <Link className="card-link" to={`/page/${this.props.link}`}>
              {this.props.title}
            </Link>
            <a href="/" className="t-link">Training</a>
          </h5>
          
        </div>
        <div className="tags-container">
          <div className="tags">
            {this.renderTags(this.props.tags)}
          </div>
        </div>
        
      </div>
    )
  }
}
