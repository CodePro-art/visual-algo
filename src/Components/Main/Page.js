import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import algoList from './AlgoList';
export default class Page extends Component {

  
  state={
    list: algoList[this.props.match.params.id-1]
  }
    
  renderList = arr => arr.map(algo => <li className="algo-li">{algo}</li>) 

  render() {
    return (
      <div className="page-container">
        
        <div className="main-section">

          <div className="animation-area">
            A
          </div>

          <div className="code-area">
            C
          </div>

        </div>

        <aside className="aside-section">
          <div className="description-area">B</div>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </aside>

      </div>
    )
  }
}
