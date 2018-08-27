import React from 'react';
import TabComponent from '../tab/tab'
import getNewsAction from '../utility'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import General from '../container/general'

const sortByClarivate = [
  { name: 'General', value: 'general', component: <General />},
  { name: 'Development', value: 'development' },
  { name: 'Financial', value: 'financial' }
  // { name: 'Analysis', value: 'analysis' },
  // { name: 'Patent Families', value: 'patentfamilies' },
  // { name: 'Sources', value: 'sources' },
  // { name: 'Change History', value: 'changehistory' }
]

const sortByTabsIntervention = [
  { name: "Drug Highlights", value: "drughighlights" },
  { name: "Pharmacological Properties", value: "pharmacologicalproperties" },
  { name: "Trial Landscape", value: "triallandscape" },
  { name: "Recent Events", value: "recentevents" }];

const sortByTabsGene = [
  { name: "Gene Summary", value: "genesummary" },
  { name: "Location", value: "location" },
  { name: "Gene Ontology", value: "geneontology" },
  { name: "Associated Pathways", value: "associatedpathways" },
  { name: "Phenotypes", value: "phenotypes" },
  { name: "Associated Drugs", value: "associateddrugs" }];

const options = 
  [
    { value: 'Intervention view', label: 'Intervention view', key : sortByTabsIntervention },
    { value: 'Gene view', label: 'Gene view', key : sortByTabsGene },
    { value: 'Researcher profile', label: 'Researcher profile', key : sortByClarivate },
  ]


// const tabList = [
//   { menuItem: 'Tab 1', render: () => <TabComponent data={sortByClarivate} />, render: <TabComponent data={sortByClarivate} /> },
//   { menuItem: 'Tab 1', render: () => <TabComponent data={sortByClarivate} />, render: 'TabComponent' }]
class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      data : []
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    for(let i=0;i< options.length; i++){
      if(selectedOption.value == options[i].value){
        this.setState({
          data : options[i].key
        })
      }
    }
    console.log(`Selected: ${selectedOption.label}`);
  }
  



  render() {
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    return (
      <div className='body'>
        <div className='leftalign'>
          {/* <a href=''>Back | {this.props.data.name} | {this.props.data.key} </a> */}
          <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={options} />
        </div>
        <div>Content
           <TabComponent data={sortByClarivate} />
        </div>
      </div>
    );
  }
}
export default View;