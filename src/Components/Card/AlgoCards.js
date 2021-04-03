import React, { Component } from 'react';
import Card from './Card';

export default class AlgoCards extends Component {
  state = {
    images: this.importAll(require.context('../../img', false, '/.gif/'))
  }
  
  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
  }
  
  render() {
    return (
      <main className="algo-cards-container">
        <ul className="algo-list">
          <li className="card-viz">
            <Card/>
          </li>  
        </ul>
      </main>
    )
  }
}
