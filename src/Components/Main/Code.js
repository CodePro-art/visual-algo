import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdContentCopy, MdModeEdit } from 'react-icons/md';
import { IoMdPlay,IoMdMoon } from "react-icons/io";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Code(props) {

  // icons functions
  const copyText = () => {}
  const toggleDarkMode = () => {}
  const playCode = () => {}
  const toggleEditMode = () => {}

  // rendering functions
  const renderTabs = arr => arr.map((content,i) => <Tab key={i}>{content}</Tab>)
  const renderPanels = arr => arr.map((content,i) => <TabPanel key={i}>{renderInnerCode(content)}</TabPanel>)
  const renderInnerCode = (code) => {
    return(
      <div className="code-box">
        <div className="code-options">
          <div className="icons-container">
            <Tippy content="Copy code">
              <button className="icon-button" onClick={()=>{copyText()}}><MdContentCopy className="icon copy" size={36}/></button>
            </Tippy>
            <Tippy content="Edit code">
              <button className="icon-button" onClick={()=>{toggleEditMode()}}><MdModeEdit className="icon edit" size={36}/></button>
            </Tippy>
            <Tippy content="Play code and see output">
              <button className="icon-button" onClick={()=>{playCode()}}><IoMdPlay className="icon play" size={36}/></button>
            </Tippy>
            <Tippy content="Dark mode">
              <button className="icon-button" onClick={()=>{toggleDarkMode()}}><IoMdMoon className="icon night"  size={36}/></button>
            </Tippy>
            
          </div>
        </div>
        <div className="code-container">
          <code>{code}</code>
        </div>

      </div>
    )
  }


  return (
    <Tabs>
        <TabList>
          {renderTabs(props.lang)}
        </TabList>
          {renderPanels(props.list)}
      </Tabs>
  )
}

