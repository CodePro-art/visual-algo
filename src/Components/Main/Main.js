import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { Component } from 'react';
import Logo from './Logo';
import Cards from './AlgoCards';
import Page from './Page';
import Search from '../Searchbar/Searchbar';

export default class Main extends Component {
  
  render() {
    return (
      <Router>
        <Logo/>
        <Search/>
        <Switch>
          <Route path="/" exact component={Cards}/>
          <Route path="/page/:id" exact component={Page}/>
        </Switch>
      </Router>
    )
  }
}
