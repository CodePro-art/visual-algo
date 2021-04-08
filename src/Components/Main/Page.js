import React, { useState,useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { FaPlay,FaPause,FaStepBackward,FaStepForward } from "react-icons/fa";
import useForceUpdate from 'use-force-update';
import algoList from './AlgoList';
import Code from './Code';
import Tile from './Tile';

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

const defaultArray = [31, 27,  5, 14, 47, 4, 45, 39, 23, 50];

export default function Page(props) {

  const [list, setList] = useState(algoList[props.match.params.id-1].list);
  const [languages, setLang] = useState([]);
  const [algolist, setAlgo] = useState([]);
  const [codelist, setCode] = useState([]);
  const [arr, setArray] = useState(defaultArray);
  
  const algoListById = id => {
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

  const extractCodes = obj => {
    let extracted = [];
    extracted.push(obj.cpp);
    extracted.push(obj.java);
    extracted.push(obj.js);
    extracted.push(obj.python);
    setCode(extracted);
  }

  // on mount
  useEffect(() => {
    setAlgo(algoListById(props.match.params.id))
    setList(algoList[props.match.params.id-1].list)
    setLang(["C++","Java","JavaScript","Python"])
  }, [props.match.params.id])

  useEffect(()=>{
    if (algolist.length > 0)
      extractCodes(algolist[props.match.params.id-1])
  },[algolist,props.match.params.id])

  const changeCurrentState = name =>extractCodes(algolist.filter( a => a.name === name)[0])
  const renderTabs = arr => arr.map((content,i) => <Tab key={i} onClick={()=>changeCurrentState(content)}>{content}</Tab>)
  const renderPanels = arr => arr.map((content,i) => <TabPanel key={i}>{renderAnimationBox(content)}</TabPanel>)

  const renderCode = () => {
    if (codelist.length > 0)
    return (
      <Switch>
        <Route path={path} exact component={()=><Code lang={languages} list={codelist}/>}/> 
      </Switch>
    )
  }

  const renderAnimationBox = content => {
    return(
      <div className="animation-box">
        <div className="animation-content">
          {renderArray(arr)}
        </div>
        <div className="animation-control">
          <FaStepBackward size={25} onClick={()=>{}}/>
          <FaPause size={25} onClick={()=>{}}/>
          <FaPlay size={25} onClick={()=>{playAnimation(content)}}/>
          <FaStepForward size={25} onClick={()=>{}}/>
        </div>
      </div>
    )
  }

  const renderArray = arr => arr.map( (e,i) => <Tile key={i} color={'red'} height={e} ></Tile>)
  const forceUpdate = useForceUpdate();
  
  const playAnimation = () => {
    insertionSort()
  }
  
// ======================================================================== //
// ======================= SORT ALGORITHMS ================================ //
// ======================================================================== //

  // -------------- JS insertion sort algorithm --------------
  const insertionSort = () => {
    let n = arr.length;
      for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j > -1) && (current < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
        setTimeout(() => {
          console.log(i);
          setArray(arr)
          forceUpdate();
        }, 5000);

        setArray(arr)
        forceUpdate();
     
      }
    setArray(arr);
  }

  // ===================================================================== //

  let { path } = useRouteMatch();
  
  return (
    <Router>
      <div className="page-container">
        <div className="main-section">
          <div className="animation-area">
            <Tabs>
              <TabList>
                {renderTabs(list)}
              </TabList>
              {renderPanels(list,arr)}
            </Tabs>
          </div>

          <div className="aside-section">
            {renderCode()}
          </div>

        </div>
      </div>
    </Router>
  )
}



