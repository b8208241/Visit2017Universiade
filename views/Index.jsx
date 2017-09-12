import React from 'react';
import Graph from './Graph.jsx';
import Data from '../data.json';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stadium: []
    };
    this.handle_Click = this.handle_Click.bind(this);
  }

  handle_Click(event){
    event.preventDefault();
    event.stopPropagation();
    let coordinate = Data[event.target.value].coordinate;
    let i, result;
    for(i=0;i<this.state.stadium.length;i++){
      if(this.state.stadium[i] == coordinate){
        result = true;
      }
    }
    if(!result){
      this.state.stadium.push(coordinate)
      this.setState({
        stadium: this.state.stadium
      })
    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div width="100%" height="100vh">
        <input type="submit" value="跳水" onClick={this.handle_Click}/>
        <input type="submit" value="網球" onClick={this.handle_Click}/>
        <input type="submit" value="桌球" onClick={this.handle_Click}/>
        <input type="submit" value="射箭" onClick={this.handle_Click}/>
        <input type="submit" value="擊劍" onClick={this.handle_Click}/>
        <input type="submit" value="田徑" onClick={this.handle_Click}/>
        <input type="submit" value="舉重" onClick={this.handle_Click}/>
        <input type="submit" value="滑輪溜冰" onClick={this.handle_Click}/>
        <input type="submit" value="籃球-和平籃球館" onClick={this.handle_Click}/>        
        <input type="submit" value="排球-臺大體育館" onClick={this.handle_Click}/>
        <input type="submit" value="足球-輔仁大學" onClick={this.handle_Click}/>
        <Graph
          stadium={this.state.stadium}/>
      </div>
    )
  }
}
