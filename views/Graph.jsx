import React from 'react';
import Defs from './Defs.jsx';
import Layer from './Layer.jsx';

export default class Graph extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){

  }

  render(){
    return(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="95%"
        viewBox="0 0 1013 848.57">
        <Defs
          stadium={this.props.stadium}/>
        <Layer
          stadium={this.props.stadium}/>
      </svg>
    )
  }
}
