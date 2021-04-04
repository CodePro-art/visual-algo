import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Page extends Component {

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

        <div className="aside-section">
          <div className="description-area">B</div>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>

      </div>
    )
  }
}
