import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { BiChevronDown } from 'react-icons/bi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import algoList from './AlgoList';
import ListItem from './ListItem';

// import algorithms
import sorting from './Algorithms/algo1';
import bitmask from './Algorithms/algo2';
import linkedList from './Algorithms/algo3';
import hashTable from './Algorithms/algo4';
import binaryHeap from './Algorithms/algo5';
import binarySearchTree from './Algorithms/algo6';
import graphStructures from './Algorithms/algo7';
import unionFindDS from './Algorithms/algo8';
import segmentTree from './Algorithms/algo9';
import fenwickTree from './Algorithms/algo10';
import recursionTree from './Algorithms/algo11';
import graphTraversal from './Algorithms/algo12';
import minSpanningTree from './Algorithms/algo13';
import ssShortestPaths from './Algorithms/algo14';
import networkFlow from './Algorithms/algo15';
import graphMatching from './Algorithms/algo16';
import cycleFinding from './Algorithms/algo17';
import suffixTree from './Algorithms/algo18';
import suffixArray from './Algorithms/algo19';
import geometry from './Algorithms/algo20';
import convexHull from './Algorithms/algo21';
import minVertexCover from './Algorithms/algo22';
import travelingSalesman from './Algorithms/algo23';
import steinerTree from './Algorithms/algo24';

export default class Page extends Component {

  state={
    title: algoList[this.props.match.params.id-1].title,
    list: algoList[this.props.match.params.id-1].list,
    languages: ["C++","Java","JavaScript","Python"],
    algo: []
  }
  
  algoListById = id => {
    switch(id) {
      case "1":
        return sorting;
      case "2": 
        return bitmask;
      case "3":
        return linkedList;
      case "4":
        return hashTable;
      case "5":
        return binaryHeap;
      case "6":
        return binarySearchTree;
      case "7":
        return graphStructures;
      case "8":
        return unionFindDS;
      case "9":
        return segmentTree;
      case "10":
        return fenwickTree;
      case "11":
        return recursionTree;
      case "12":
        return graphTraversal;
      case "13":
        return minSpanningTree;
      case "14":
        return ssShortestPaths;
      case "15":
        return networkFlow;
      case "16":
        return graphMatching;
      case "17":
        return cycleFinding;
      case "18":
        return suffixTree;
      case "19":
        return suffixArray;
      case "20":
        return geometry;
      case "21":
        return convexHull;
      case "22":
        return minVertexCover;
      case "23":
        return travelingSalesman;
      case "24":
        return steinerTree;
      default:
    }
  } 

  componentDidMount(){
    this.setState({algo: this.algoListById(this.props.match.params.id)})
  }
  
  renderList = arr => arr.map((content,i) => <ListItem key={i} content={content}/>) 
  renderTabs = arr => arr.map((content,i) => <Tab key={i}>{content}</Tab>)
  // renderCodeTabs = arr => arr.map((content,i) => <Tab key={i}>{content}</Tab>)
  renderPanels = arr => arr.map((content,i) => <TabPanel key={i}><h2>{content}</h2></TabPanel>)

  render() {
    console.log(this.state.algo);
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
            <Tabs>
              <TabList>
                {this.renderTabs(this.state.list)}
              </TabList>

              {this.renderPanels(this.state.list)}
            </Tabs>
          </div>
        </div>

      </div>
    )
  }
}
