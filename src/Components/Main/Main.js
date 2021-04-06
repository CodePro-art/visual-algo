import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { Component } from 'react';
import Cards from './AlgoCards';
import Logo from './Logo';
import Page from './Page';

export default class Main extends Component {
  
  render() {
    return (
      <Router>
        <Logo/>
        <Switch>
          <Route path="/" exact component={Cards}/>
          <Route path="/page/:id" exact component={Page}/>
        </Switch>
      </Router>
    )
  }
}
