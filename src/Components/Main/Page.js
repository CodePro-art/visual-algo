import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { BiChevronDown } from 'react-icons/bi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import algoList from './AlgoList';
import ListItem from './ListItem';

export default class Page extends Component {

  state={
    title: algoList[this.props.match.params.id-1].title,
    list: algoList[this.props.match.params.id-1].list
  }
    
  renderList = arr => arr.map((content,i) => <ListItem key={i} content={content}/>) 
  renderTabs = arr => arr.map((content,i) => <Tab key={i}>{content}</Tab>)
  renderCodeTabs = () => {} 
  renderPanels = arr => arr.map((content,i) => <TabPanel><h2>{content}</h2></TabPanel>)

  render() {
    return (
      <div className="page-container">

        <div className="main-section">
          <div className="animation-area">
            <Tabs>
              <TabList>
                {this.renderTabs(this.state.list)}
              </TabList>

              {this.renderPanels(this.state.list)}
              
            </Tabs>
          </div>
          <div className="code-area">

          </div>
        </div>

    
      </div>
    )
  }
}
