import React, { Component } from 'react';
import images from './images';
import Card from './Card';
import Logo from './Logo';
import Search from '../Searchbar/Searchbar';

export default class AlgoCards extends Component {
  
  renderCards = arr => arr.map(({id, sta, src, title, description}) =>
    <Card key={id} src={src} sta={sta} title={title} alt={description} />)

  render() {

    return (
      <main className="algo-cards-container">
        <Logo/>
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
