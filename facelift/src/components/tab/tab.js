import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabComponent from '../tab/tab'
import 'react-tabs/style/react-tabs.css';


class AppView extends React.Component {

  constructor(props) {
    // console.log(props);
    super(props)
  }
  
  renderTabList(){
    return this.props.data.map((item, i) => {
      return (
       <Tab key={i}>{item.name}</Tab>
      )
    })
  }

  renderContentList(){
    return this.props.data.map((item, i) => {
      return (
        <TabPanel key={i}>
        {/* <h2>Any content {i}</h2> */}
        {item.component}
      </TabPanel>
      )
    })
  }

  render() {
    // console.log("this.props", this.props);
    return (
      <div>
        <Tabs>
          <TabList>
           { this.renderTabList() }
          </TabList>  
         { this.renderContentList() }
        </Tabs>
      </div>
    );
  }
}
export default AppView;