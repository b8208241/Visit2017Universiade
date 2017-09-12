import React from 'react';

export default class Defs extends React.Component {
  componentWillMount(){

  }

  render(){
    let clipPath = [];
    let i;
    for(i=0 ;i<5 ;i++){
      let count = (i+1);
      clipPath.push(
        <ClipPath
          key={"key_clip-path-"+count}
          count={count}
          loopIndex={i}
          />
      )
    };
    return(
      <defs>
        <Style
          stadium = {this.props.stadium}/>
        {clipPath}
      </defs>
    )
  }
}

class Style extends React.Component {
  render(){
    let styleString = ".cls-1{fill:#382a9b;}.cls-2{fill:#fff;}.cls-3{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1.02px;}.cls-4{fill:#2496bf;}.cls-5{fill:#f3be14;}.cls-6{fill:#1c9052;}.cls-7{fill:#e9192e;}";
    let i;
    for(i=0 ;i<5 ;i++){
      let count = (i+1);
      styleString = styleString+".cls-"+String(count+7)+"{clip-path:url(#clip-path-"+String(count)+");}";
    }
    return(
      <style>
        {styleString}
      </style>
    )
  }
}

class ClipPath extends React.Component {
  constructor(props){
    super(props);
    this.prepareD = this.prepareD.bind(this);
  }

  prepareD(i){
    switch (i) {
      case 0:
        return ("M11.25,9.56l.3,1.93c2.55.68,4.31-.89,4.31-2.62-.8,1-2.53,1.47-4.62.69")
        break;
      case 1:
        return ("M11.77,13.59l.44,2.77c0,.27.18.35.38.33,2.6-.22,4.24-1.16,5.13-2.41a6.72,6.72,0,0,1,.18-5.5,6.36,6.36,0,0,0-2-2.33c1.56,4.57-.49,6.82-4.15,7.15")
        break;
      case 2:
        return ("M17.91,8.78a5.32,5.32,0,0,1-.18,5.5c.79,1.83,2.56,3.5,5.7,4.52.28.09.41,0,.54-.15l2.19-4c-5-.38-7.89-4-5.36-9.07a7.06,7.06,0,0,0-2.89,3.2")
        break;
      case 3:
        return ("M17.73,14.28a5.32,5.32,0,0,0,.18-5.5,6.72,6.72,0,0,0-.18,5.5")
        break;
      case 4:
        return ("M26.28,11.83l1.54-3c-3.16,1-6.14.38-6.92-1.92-.66,3.21,1.53,5.28,5.38,4.89")
        break;
      default:
        return "err"
        break;
    }
  }

  render(){
    let d = this.prepareD(this.props.loopIndex);
    return(
      <clipPath id={"clip-path-"+String(this.props.count)}>
        <path className="cls-1" d={d}/>
      </clipPath>
    )
  }
}
