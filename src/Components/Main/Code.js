import React, { useEffect }from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Code(props) {

  
  useEffect(() => {
   console.log(props);
    
  }, [props])

  const renderTabs = arr => arr.map((content,i) => <Tab key={i}>{content}</Tab>)
  const renderPanels = arr => arr.map((content,i) => <TabPanel key={i}><p>{content}</p></TabPanel>)
  return (
    <Tabs>
        <TabList>
          {renderTabs(props.lang)}
        </TabList>
          {renderPanels(props.list)}
      </Tabs>
  )
}

