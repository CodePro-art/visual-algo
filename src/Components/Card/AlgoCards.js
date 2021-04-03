import React, { Component } from 'react';
import images from './images';
import Card from './Card';
import Search from '../Searchbar/Searchbar';

export default class AlgoCards extends Component {
  
  renderCards = arr => arr.map(({id, sta, src, title, description}) =>
    <Card key={id} src={src} sta={sta} title={title} alt={description} />)

  render() {

    return (
      <main className="algo-cards-container">
        <div className="title-logo">
          <a className="lg-logo" href="/">
            <span className="primery">VISU</span> 
            <span className="secondary">ALGO</span>
          </a>
          <p className="subtext">visualising data structures and algorithms through animation</p>
        </div>
        <Search/>
        <ul className="algo-list">
          <li className="card-viz">
            {this.renderCards(images)}
          </li>  
        </ul>
      </main>
    )
  }
}
