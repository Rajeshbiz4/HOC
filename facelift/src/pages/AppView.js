import React from 'react';
import View from '../components/intervention-view/view'



class AppView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       viewObj : {
         name : 'Intervation',
         key : 'Marketed'
       }
    }
  }

   render() {
      return (
         <div>
          <View data={this.state.viewObj} />
         </div>
      );
   }
}
export default AppView;