import React, { Component } from 'react';
import images from './images';
import Card from './Card';

export default class AlgoCards extends Component {
  
  renderCards = arr => arr.map(({id, sta, src, title, tags}) =>
    <Card key={id} src={src} sta={sta} title={title} tags={tags}/>)

  render() {

    return (
      <main className="algo-cards-container">  
        <ul className="algo-list">
          <li className="card-viz">
            {this.renderCards(images)}
          </li>  
        </ul>
      </main>
    )
  }
}
