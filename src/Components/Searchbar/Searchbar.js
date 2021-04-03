import React, { Component } from 'react'
import { FcSearch } from "react-icons/fc";

export default class Searchbar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <label className="search-label" htmlFor="searchbar">Search:</label>
        <input className="search-input" type="text" id="searchbar" placeholder="Search..."/>
        <button><FcSearch size={35}/></button>
      </div>
    )
  }
}
