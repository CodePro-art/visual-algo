import React, { Component } from 'react';
import Logo from './Logo';
import Cards from './AlgoCards';
import Search from '../Searchbar/Searchbar';

export default class Main extends Component {
  
  render() {
    return (
      <div>
        <Logo/>
        <Search/>
        <Cards/>
      </div>
    )
  }
}
