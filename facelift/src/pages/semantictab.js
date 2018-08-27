
import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import TabComponent from '../components/tab/tab'

const clarivate = ['general','developemet','financial','analysis','source']
const panes = [
  { menuItem: 'general', render: () => <TabComponent data={clarivate}/> },
  { menuItem: 'developemet', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'financial', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

class TabExampleColored extends Component {
 //  state = { color: colors[0] }

  // handleColorChange = e => this.setState({ color: e.target.value })

  render() {
   //  const { color } = this.state

    return (
      <div>
        <Divider hidden />
        <Tab menu={{ attached: false, tabular: false }} panes={panes} />
      </div>
    )
  }
}

export default TabExampleColored