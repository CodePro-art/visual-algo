import React, { Component } from 'react';
import Search from '../Searchbar/Searchbar';
import Images from './Images';
import Card from './Card';

export default class AlgoCards extends Component {
  
  renderCards = arr => arr.map(({id, sta, src, title, tags}) =>
    <Card key={id} src={src} sta={sta} title={title} tags={tags} link={id}/>)

  render() {

    return (
      <main className="algo-cards-container"> 
        <Search/>
        <ul className="algo-list">
          <li className="card-viz">
            {this.renderCards(Images)}
          </li>  
        </ul>
      </main>
    )
  }
}
